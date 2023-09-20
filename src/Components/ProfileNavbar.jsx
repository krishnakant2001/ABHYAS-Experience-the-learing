import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
// import { userPic } from "../assets/blankProfile.png";

const ProfileNavbar = () => {
  const { currentUser } = useContext(AuthContext);

  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const realTime = async () => {
      try {
        const unsub = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
          setProfile(doc.data().img);
        });
        return () => {
          unsub();
        };
      } catch (error) {
        console.log("realTime Error");
      }
    };
    realTime();
  }, [currentUser.uid]);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="navbar">
      <span className="logo" onClick={handleClick}>
        Abhyas
      </span>
      <div className="buttons">
        {!currentUser ? (
          <button id="courses">Courses</button>
        ) : (
          <button id="courses">Dashboard</button>
        )}
        {!currentUser ? (
          <Link to="/signIn">
            <button>Login</button>
          </Link>
        ) : (
          <img src={profile} alt="" />
        )}
      </div>
    </div>
  );
};

export default ProfileNavbar;

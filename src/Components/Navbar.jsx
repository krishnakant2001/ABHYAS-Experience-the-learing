import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";

const Navbar = () => {
  
  const { currentUser } = useContext(AuthContext);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  const handleClickBelow = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 2000, behavior: "smooth" });
  };
  const handleClickCourse = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 750, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile(docSnap.data().img);
        }
      } catch (error) {}
    };
    fetchData();
  });

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleClickDashboard = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="navbar">
      <span className="logo" onClick={handleClick}>
        Abhyas
      </span>
      <div className="listElements">
        <span onClick={handleClickBelow}>About us</span>
        <span onClick={handleClickBelow}>Testimonials</span>
        <span onClick={handleClickBelow}>Contact</span>
      </div>
      <div className="buttons">
        {!currentUser ? (
          <button id="courses" onClick={handleClickCourse}>
            Courses
          </button>
        ) : (
          <button id="courses" onClick={handleClickDashboard}>
            Dashboard
          </button>
        )}
        {!currentUser ? (
          <Link to="/signIn">
            <button>Login</button>
          </Link>
        ) : (
          <Link to="/myProfile">
            <div className="profile">
              <img src={profile && profile} alt="" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

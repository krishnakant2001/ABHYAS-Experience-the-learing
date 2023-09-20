import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Profile from "../assets/blankProfile.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const displayName = event.target[0].value;
    const email = event.target[1].value;
    const phone = event.target[2].value;
    const password = event.target[3].value;
    const img = Profile;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      try {
        await updateProfile(res.user, {
          displayName,
        });
        console.log(res);
        // navigate("/");

        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          name: displayName,
          email,
          img,
          phone,
          password,
        });
        navigate("/");
      } catch (error) {
        setErr(true);
      }
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="circle1"></div>

      <div className="leftPan">
        <h1>Abhyas</h1>
        <h3>Experience the Learning</h3>
      </div>

      <div className="rightPan">
        <div className="login">
          <h1> Sign-Up </h1>
          <h4>
            or &nbsp;{" "}
            <Link to="/signIn">
              <span>Login to existing account</span>
            </Link>
          </h4>
        </div>

        <form className="registration" onSubmit={handleSubmit}>
          <input type="text" placeholder="Name:"></input>
          <input type="email" placeholder="Email:"></input>
          <input type="tel" placeholder="Phone:"></input>
          <input type="password" placeholder="Password:"></input>
          <input type="file" name="" id="file" style={{ display: "none" }} />

          <button className="button">Register</button>

          {err && <span>Please check your Information</span>}
        </form>
      </div>
    </div>
  );
};
export default Register;

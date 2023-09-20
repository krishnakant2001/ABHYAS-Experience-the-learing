import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
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
          <h1>Sign-In</h1>
          <h4>
            or &nbsp;
            <Link to="/signUp">
              <span>create new account</span>
            </Link>
          </h4>
        </div>

        <form className="registration" onSubmit={handleSubmit}>
          <input type="text" placeholder="Email:"></input>
          <input type="password" placeholder="Password: "></input>
          <button className="button">Login</button>
          {err && <p>Something went Wrong</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;

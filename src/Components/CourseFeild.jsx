import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import thumbnail from "../assets/image1.jpg";
import { AuthContext } from "../Context/AuthContext";

const CourseFeild = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext)
  const handleClick = (e) => {
    e.preventDefault();
    if (currentUser) {
      navigate("/player");
    }
  };
  return (
    <div className="courseFeild">
      <div className="courseSection">
        <img src={thumbnail} alt="" />
        <p onClick={handleClick}>
          Data Structures and Algorithms Master Course
        </p>
        <div className="mentor">Love Babbar</div>
      </div>
    </div>
  );
};

export default CourseFeild;

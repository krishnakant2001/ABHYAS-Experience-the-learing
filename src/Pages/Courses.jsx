import React, { useContext } from "react";
import imageThumb from "../assets/image1.jpg";
import CourseContent from "../Components/CourseContent";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Courses = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (currentUser) {
      navigate("/payment");
    } else {
      navigate("/signIn");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="loadingPage">
        <div className="courseContains">
          <div className="leftContent">
            <p className="firstLine">
              Welcome to <span>abhyas</span> family
            </p>
            <p className="mainText">Web Development Master Course @dot Batch</p>
            <p className="lastLine">
              Build fullstack React.js applications with Node.js, Express.js &
              MongoDB (MERN) with this project-focused course.
            </p>
            <p className="stars">⭐⭐⭐⭐⭐</p>
            <p className="langAndVideos">🌐 Hinglish &nbsp; 🎦 72 Lectures </p>
          </div>
        </div>

        <div className="rightContains">
          <img src={imageThumb} alt="" />
          <div className="coursesPrice">
            <h4 className="color">₹4000</h4>
            <h4 className="strike">₹7000</h4>
          </div>
          <button onClick={handleClick}> Buy Now </button>

          <div className="inclusion">
            <p className="inclusionPara">This Course Includes:</p>
            <ul className="listInclude">
              <li>No prerequisite Required</li>
              <li>150 Hourse On-Demand video</li>
              <li>MERN Stack from 0 to advanced</li>
              <li>Doubt Assistance</li>
              <li>Industry grade projects</li>
              <li>A course like never before</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lowerContent">
        <div className="chotaNav">
          <p>Overview</p>
          <p>CourseContent</p>
          <p>Instructors</p>
        </div>
        <div className="secondSection">
          <h2>What you will learn</h2>
          <div className="descriptiveContent">
            <div>
              <p>✔️ &nbsp; HTML, CSS & Javascript</p>
              <p>✔️ &nbsp; CSS Animation</p>
              <p>✔️ &nbsp; End to End React.js Application</p>
              <p>✔️ &nbsp; No Prerequisite Required</p>
              <p>✔️ &nbsp; Building all project from complete Scratch</p>
            </div>
            <div>
              <p>✔️ &nbsp; Tailwind CSS</p>
              <p>✔️ &nbsp; Core Javascript</p>
              <p>✔️ &nbsp; 15+ Industry Grade Projects</p>
              <p>✔️ &nbsp; End to End Backend with Node.js and Express.js</p>
            </div>
          </div>

          <div className="thirdSection">
            <h2>Basic Details</h2>
            <div className="deadlines">
              <div className="leftPart">
                <p>Course Starts on</p>
                <p>Class Timings</p>
                <p>Mode of the Course</p>
                <p>No. of Lectures</p>
                <p>Class Recordings Provided</p>
                <p>Doubt Classes</p>
                <p>Courses Validity</p>
              </div>
              <div className="rightPart">
                <p>30th April 2023</p>
                <p>9:00PM - 11:00PM (IST)</p>
                <p>Online</p>
                <p>72</p>
                <p>Yes</p>
                <p>20+ Doubt Sessions</p>
                <p>1.5 Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CourseContent />
      <Footer />
    </div>
  );
};

export default Courses;

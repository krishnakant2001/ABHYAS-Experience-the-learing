import React, { useContext } from "react";
import CourseFeild from "../Components/CourseFeild";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContext";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="dashboardContent">
          <div className="name">Hey, {currentUser.displayName} </div>
          <CourseFeild />
          <CourseFeild />
          <CourseFeild />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

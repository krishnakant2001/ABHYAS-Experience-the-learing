import React from "react";
import Navbar from "../Components/Navbar";
import MainSection from "../Components/MainSection";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <div className="courseContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card/>
        <Card />
        
      </div>

      <Footer />
    </div>
  );
};

export default Home;

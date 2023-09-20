import React from "react";

const Footer = () => {
  
  return (
    <div className="footerContainer">
      <div className="logoContainer">
        <h1>Abhyas</h1>
        <h3>Experience the Learning</h3>
      </div>
      <div className="middleContainer">
        <div className="menuContainer">
          <h2>Menu</h2>
          <h4>About Us</h4>
          <h4>Courses</h4>
          <h4>Labs</h4>
          <h4>Contact</h4>
        </div>
        <div className="servicesContainer">
          <h2>Services</h2>
          <h4>Privacy Policy</h4>
          <h4>Terms of Use</h4>
          <h4>Refund Policy</h4>
        </div>
      </div>
      <div className="verticalLine"></div>
      <div className="cornerContainer">
        <h3>GET IN TOUCH</h3>
        <h4>Email: support@abhyas.in</h4>
      </div>
    </div>
  );
};

export default Footer;

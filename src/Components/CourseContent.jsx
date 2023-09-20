import React, { useState } from "react";

const CourseContent = () => {
  const [hc1, setHc1] = useState(false);
  const [hc2, setHc2] = useState(false);
  const [hc3, setHc3] = useState(false);
    const [hc4, setHc4] = useState(false);
    
  const handleClick1 = () => {
    if (!hc1) {
      setHc1(true);
    } else {
      setHc1(false);
    }
    };
    
    const handleClick2 = () => {
      if (!hc2) {
        setHc2(true);
      } else {
        setHc2(false);
      }
    };

    const handleClick3 = () => {
      if (!hc3) {
        setHc3(true);
      } else {
        setHc3(false);
      }
    };

    const handleClick4 = () => {
      if (!hc4) {
        setHc4(true);
      } else {
        setHc4(false);
      }
    };
  return (
    <div style={{ paddingBottom: "8%" }}>
      <h2 className="courseContentHeading">Course Content</h2>
      <button className={hc1 ? "active" : "toggle"} onClick={handleClick1}>
        HTML Basics
      </button>
      <div className={hc1 ? "content100" : "content"}>
        <ul>
          <li>Setting up</li>
          <li>Basics</li>
          <li>Advanced</li>
        </ul>
      </div>

      <button className={hc2 ? "active" : "toggle"} onClick={handleClick2}>
        CSS Basics
      </button>
      <div className={hc2 ? "content100" : "content"}>
        <ul>
          <li>Setting up</li>
          <li>Basics</li>
          <li>Advanced</li>
        </ul>
      </div>

      <button className={hc3 ? "active" : "toggle"} onClick={handleClick3}>
        Flex Box & Grid
      </button>
      <div className={hc3 ? "content100" : "content"}>
        <ul>
          <li>Setting up</li>
          <li>Basics</li>
          <li>Advanced</li>
        </ul>
      </div>

      <button className={hc4 ? "active" : "toggle"} onClick={handleClick4}>
        Animation & Responsiveness
      </button>
      <div className={hc4 ? "content100" : "content"}>
        <ul>
          <li>Setting up</li>
          <li>Basics</li>
          <li>Advanced</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseContent;

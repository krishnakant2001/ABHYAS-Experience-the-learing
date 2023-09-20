import React, { useRef, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Typed from "typed.js";
import mainImg from "../assets/mainImg.png";

const MainSection = () => {
  const [newQuote, setNewQuote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const el = useRef(null);

  useEffect(() => {
    const getQuotes = async () => {
      const apiURL = "https://api.quotable.io/random";
      await axios
        .get(apiURL)
        .then((res) => {
          setNewQuote(res.data.content);
          setNewAuthor(res.data.author);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (document.readyState === "complete") {
      getQuotes();
    } else {
      window.addEventListener("load", getQuotes);
      return () => document.removeEventListener("load", getQuotes);
    }
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Need", "Want"],
      typeSpeed: 180,
      loop: true,
      backSpeed: 180,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="mainSection">
        <div className="mainHeading">
          <p>
            <span className="logo">ABHYAS</span>
            &nbsp; that's you all <span ref={el} className="autoType" />
          </p>
          {/* <p className="description">Lorem ipsum dolor sit amet consectetur</p> */}
        </div>
        <img src={mainImg} alt="" />
      </div>
      <div className="quote">
        <p>“{newQuote}”</p>
        <span className="author">~{newAuthor}</span>
      </div>
    </div>
  );
};

export default MainSection;

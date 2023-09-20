import React from "react";
import Navbar from "../Components/Navbar";
// import ProfileNavbar from '../Components/ProfileNavbar';
import video from "../assets/file.mp4";

function VideoPlayer() {
  return (
    <div >
      <Navbar />
      <div className="totalContainer">
        <div className="videoPlayer">
          <video src={video} controls width="50%">
            {" "}
          </video>
        </div>
        <div className="chatBot">
          <div className="chatBox">
            <div className="chatMessage">
              <input type="text" placeholder="Send a message"></input>
            </div>
            <div className="messages">
              <div className="mess1">
                <p>Good morning, Sir</p>
              </div>
              <div className="mess2">
                <p>Good Morning, Sir</p>
              </div>
              <div className="mess3">
                <p>Hello, Sir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;

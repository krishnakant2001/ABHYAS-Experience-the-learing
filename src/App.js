import React, { useEffect } from "react";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import MyProfile from "./Pages/MyProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import Payment from "./Pages/Payment";
import Transaction from "./Pages/Transaction";
import Courses from "./Pages/Courses";
import Dashboard from "./Pages/Dashboard";
import VideoPlayer from "./Pages/VideoPlayer";

const App = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo({ top: 0, behavior:"smooth"});
    };
    scroll();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signIn" element={<Login />} />
          <Route path="signUp" element={<Register />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="payment" element={<Payment />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="courses" element={<Courses />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="player" element={<VideoPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

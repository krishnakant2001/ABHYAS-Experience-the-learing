import React from "react";
import { useNavigate } from "react-router-dom";

const Transaction = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="transaction">
      <div className="label">
        OTP was send Successfully on your registered mobile Number
      </div>
      <form className="otp" onSubmit={handleSubmit}>
        <label htmlFor="otp">Enter OTP</label>
        <input type="text" required maxLength={6}/>
        <button className="button">
          Pay
        </button>
      </form>
    </div>
  );
};

export default Transaction;

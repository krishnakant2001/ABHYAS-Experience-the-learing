import React from "react";
import { useNavigate } from "react-router-dom";
import thumbnail from "../assets/image1.jpg";


const Payment = () => {

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/transaction");
  };

  return (
    <div className="orderPage">
      <div className="paymentForm">
        <div className="heading">
          <h2>Payment Details</h2>
          <h5>
            <span>Abhyas</span> Experience the Learning
          </h5>
        </div>
        <form className="PaymentformContainer" onSubmit={handleSubmit}>
          <div className="cardNumber">
            <label htmlFor="CardNumber">Card Number</label>
            <input
              type="text"
              maxLength="16"
              required
              placeholder="1234 4567 2589 3697"
            />
          </div>
          <div className="name">
            <label htmlFor="Name">Name on the Card</label>
            <input type="text" required />
          </div>
          <div className="expiry">
            <div className="expiryMonth">
              <label htmlFor="Expiry">Expiry</label>
              <input type="text" maxLength="2" required />
            </div>
            <div className="expiryYear">
              <input type="text" maxLength="4" required />
            </div>
          </div>
          <div className="cvv">
            <label htmlFor="CVV">CVV</label>
            <input type="password" maxLength="3" required />
          </div>
          <div className="actions">
            <button className="button" onClick={handleClick}>
              cancel
            </button>
            <button className="button">Make Payment</button>
          </div>
        </form>
      </div>
      <div className="summary">
        <div className="heading">
          <h2>Order Details</h2>
          <h5>
            <span>Abhyas</span> Experience the Learning
          </h5>
        </div>
        <div className="section">
          <p>Data Structures and Algorithms Master Course</p>
          <img src={thumbnail} alt="" />
        </div>
        <div className="amount">
          <div className="showAmount">
            <div className="gst">*GST included</div>
            <div className="amt">
              <p>₹4500</p>
              <span>₹7000</span>
              <h5>35% off</h5>
            </div>
          </div>
          <div className="borderline"></div>
          <div className="TotalAmount">
            <h2>Total Amount</h2>
            <h3>₹4500</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

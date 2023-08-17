import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { subscribeAction } from "../../actions/subscribedAction";
import { useSelector, useDispatch } from "react-redux";
import { createOrderAction } from "../../actions/createOrderAction";
import "./gateway.css";
import { useEffect } from "react";

const PaymentGateway3 = (props) => {
  const [amount, setAmount] = useState("100000");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const options1 = {
      amount: 200000, // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_12",
    };
    dispatch(createOrderAction(options1));
  }, [amount]);

  var User = useSelector((state) => state.currentUserReducer);
  var orderData = useSelector((state) => state.orderReducer);
  const localSubs = JSON.parse(localStorage.getItem("Subcribed"));
  const subscribed = User && localSubs.data.result.subcription;
  const plan = User && localSubs.data.result.amount;
  const email = User && User.result.email;
  const id = User && localSubs.data.result._id;

  const handlePayment = (e) => {
    e.preventDefault();
    setAmount("100000");

    if (orderData.data != null) {
      var options = {
        key: process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: 200000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Stack Corp",
        description: "Test Transaction1",
        image: "https://example.com/your_logo",
        order_id:
          orderData.data.result != null ? orderData.data.result : "786fg", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
          dispatch(subscribeAction({ id, email, amount }, navigate));
          navigate("/");
          //alert(response.razorpay_payment_id);
          //alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
        },
        prefill: {
          name: "ZeroCod",
          email: "ZeroCod@example.com",
          contact: "6282143512",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#d59514",
        },
      };

      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      alert("Try Again");
    }
  };

  return (
    <div>
      {subscribed == true && plan == props.amount ? (
        "Subscribed"
      ) : (
        <button
          type="submit"
          onClick={handlePayment}
          className="payment-button"
        >
          Subscribe
        </button>
      )}
    </div>
  );
};

export default PaymentGateway3;

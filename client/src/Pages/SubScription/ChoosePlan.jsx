import React, { useState } from "react";
import { Link } from "react-router-dom";

import PaymentGateway2 from "../../components/Payment/PaymentGateway2";
import PaymentGateway3 from "../../components/Payment/PaymentGateway3";
import "./choosePlan.css";
const ChoosePlan = () => {
  const [amount2, setamount2] = useState("100");
  const [amount3, setamount3] = useState("1000");
  return (
    <div style={{ margingTop: "50%" }} className="plans-container">
      <div className="plans-list">
        <div className="plan-Details">
          <ul className="pyament-ul1">
            <li>Plans</li>
            <li>Specifications</li>
            <li> Choose a plan</li>
          </ul>
          <ul className="pyament-ul">
            <li>Starter</li>
            <li> Free plan offers one Question post</li>
            <li>Free Plan</li>
          </ul>
          <ul className="pyament-ul">
            <li>Basic </li>
            <li>
              5 Question post for 1 motnth
              <p></p>&#8377; 100/- only
            </li>
            <li>
              <Link to="/subscription-payment-gateway2">
                <PaymentGateway2 amount={amount2} />
              </Link>{" "}
            </li>
          </ul>
          <ul className="pyament-ul">
            <li>Advanced </li>
            <li>
              1 Month unlimited Access to community
              <p></p> &#8377; 1000/month
            </li>
            <li>
              <Link to="/subscription-payment-gateway3">
                <PaymentGateway3 amount={amount3} />
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;

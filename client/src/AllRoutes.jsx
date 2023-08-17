import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestions from "./Pages/Questions/DisplayQuestions";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";
import CommunityHome from "./Pages/Community/CommunityHome";
import PostPage from "./Pages/PostPage/PostPage";
import ChoosePlan from "./Pages/SubScription/ChoosePlan";
import PaymentGateway2 from "./components/Payment/PaymentGateway2";
import PaymentGateway3 from "./components/Payment/PaymentGateway3";
import Login from "./components/Login/Login";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/Questions/:id" element={<DisplayQuestions />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Users/:id" element={<UserProfile />} />
      <Route path="/stackoverflow-community/post/:id" element={<PostPage />} />
      <Route path="/stackoverflow-community" element={<CommunityHome />} />
      <Route path="/subscription-page" element={<ChoosePlan />} />
      <Route path="/otpLogin" element={<Login />} />

      <Route
        path="/subscription-payment-gateway2"
        element={<PaymentGateway2 />}
      />
      <Route
        path="/subscription-payment-gateway3"
        element={<PaymentGateway3 />}
      />
    </Routes>
  );
};

export default AllRoutes;

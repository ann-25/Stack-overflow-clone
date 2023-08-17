import React from "react";
import { useLocation } from "react-router-dom";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = () => {
  const location = useLocation();

  return (
    <div className="home-container-1">
      <div className="side-bar d-none d-lg-block">
        {" "}
        <LeftSidebar />
      </div>
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;

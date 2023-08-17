import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";

import "./Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";

const NavBar = () => {
  const [subs, setSubs] = useState(false);
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const localSubs = JSON.parse(localStorage.getItem("Subcribed"));
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        //expiry time < current time. i.e., token is expired
        handleLogOut();
      }
    }

    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  return (
    <Navbar className="main-nav" expand="lg">
      <Container className="navbar" expand="lg">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" width={200} />
        </Link>
        <Link to="/stackoverflow-community" className="nav-item nav-btn">
          Community
        </Link>

        <Link to="/" className="nav-item nav-btn">
          Product
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Team
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width={20} className="search-icon" />
        </form>

        {User === null ? (
          <Link to="/Auth" className="nav-item nav-Links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
            >
              {" "}
              <Link
                to={`/Users/${User?.result?._id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {User.result.name.charAt(0).toUpperCase()}
              </Link>
            </Avatar>{" "}
            {localSubs === null ? (
              ""
            ) : (
              <Link to="/subscription-page" className="nav-item nav-Links">
                {localSubs.data.result.subcription == "true"
                  ? "Subscribed"
                  : "Subscibe"}
              </Link>
            )}
            {/* A: first letter of the user */}
            <button className="nav-item nav-Links" onClick={handleLogOut}>
              Log Out
            </button>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;

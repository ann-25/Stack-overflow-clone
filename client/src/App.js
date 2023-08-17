import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import NavBar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { useEffect } from "react";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { fetchAllPosts } from "./actions/post";
import { Container, Nav, Navbar } from "react-bootstrap";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";

function App() {
  localStorage.setItem("Login", JSON.stringify({ status: false }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Navbar className="d-lg-none d-md-none" expand="sm">
          <Container className="navbar" expand="sm">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Collapse className="me-auto">
                <div
                  className="res-side-bar"
                  style={{ height: "200px", marginTop: "20%" }}
                >
                  {" "}
                  <LeftSidebar />
                </div>
              </Navbar.Collapse>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;

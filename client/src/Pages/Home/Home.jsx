import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import { BsChatSquare } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Chatbot from "../../components/Chatbot/Chatbot";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Home = () => {
  const [BotIsOpen, setBotIsOpen] = useState(false);

  return (
    <div>
      <Container className="home-container-1">
        <Navbar expand="md" className='"home-container-2"'>
          <Col className="d-none d-lg-block">
            {" "}
            <LeftSidebar />
          </Col>

          {BotIsOpen ? (
            <div className="chatbot-button" onClick={() => setBotIsOpen(false)}>
              <RxCross1 className="comment-button" />
            </div>
          ) : (
            <div className="chatbot-button" onClick={() => setBotIsOpen(true)}>
              <BsChatSquare className="comment-button" />
            </div>
          )}

          {BotIsOpen && <Chatbot setBotIsOpen={setBotIsOpen} />}

          <Container>
            {" "}
            <HomeMainbar />
          </Container>
          <Container>
            {" "}
            <RightSidebar />
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Home;

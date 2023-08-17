import React, { useState } from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import { Col, Container, Navbar } from "react-bootstrap";
import { BsChatSquare } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Chatbot from "../../components/Chatbot/Chatbot";

const Questions = () => {
  const [BotIsOpen, setBotIsOpen] = useState(false);

  return (
    <div>
      <Container className="home-container-1">
        <Navbar expand="md" className='"home-container-2"'>
          <Col className="d-none d-lg-block d-sm-none d-md-block">
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

export default Questions;

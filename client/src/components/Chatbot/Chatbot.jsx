import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.css";
import { FiChevronDown } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import Logo from "../../assets/icon.png";
import axios from "axios";

const Chatbot = ({ setBotIsOpen }) => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([
    {
      id: 212,
      text: "Hi, want to ask about programming?",
      sender: "robot",
    },
  ]);
  const [input, setInput] = useState("");
  const boxRef = useRef();
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    boxRef.current.scrollTo(-20, 10000000000);
  }, [chats]);
  const status = JSON.parse(localStorage.getItem("Login"));

  const handleSubmit = (e) => {
    e.preventDefault();
    setChats((prev) => [
      ...prev,
      { id: Date.now(), text: input, sender: "user" },
    ]);
    setTyping(true);
    const newi = "Hello world";
    if (status.status === true) {
      axios
        .post("http://localhost:5000/chat", { prompt: input })
        .then((res) => {
          setInput("");
          setTyping(false);
          setChats((prev) => [
            ...prev,
            { id: Date.now(), text: res.data, sender: "robot" },
          ]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Verify Your Account Ask Questions...");
      navigate("/OtpLogin");
    }
  };

  return (
    <div className="chatbot-outer">
      <div className="chatbox-container">
        <div className="header">
          <div className="left-header">
            <div className="stack-logo">
              <img src={Logo} alt="" />
            </div>
            <span className="header-title">StackBot</span>
          </div>
          <button onClick={() => setBotIsOpen(false)}>
            <FiChevronDown />
          </button>
        </div>
        <div className="chats-box" ref={boxRef}>
          {chats?.map((chat) => {
            return (
              <div className={chat.sender} key={chat.id}>
                <span>{chat.text}</span>
              </div>
            );
          })}
          {typing && <span className="typing">Typing...</span>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button type="submit">
              <IoSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;

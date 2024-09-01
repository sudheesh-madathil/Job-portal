import { useEffect, useState, useRef } from "react";
import { UserNavbar } from "../navbar/UserNavbar";
import "./UserMessage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Your backend URL

const UserMessage = () => {
  const { id } = useParams();
  const [uniqueSenderIds, setUniqueSenderIds] = useState([]);
  const [selectedSenderId, setSelectedSenderId] = useState(null);
  const [sendMessage, setSendMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [userFullnames, setUserFullnames] = useState({});
  const chatEndRef = useRef(null);
console.log(selectedSenderId,"select cender id");
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/message/${id}`);
        console.log("Messages Response:", response.data);

        // Extract unique sender IDs
        const uniqueSenderIds = Array.from(
          new Set(response.data.map((message) => message))
        );
        setUniqueSenderIds(uniqueSenderIds);

        console.log("Unique Sender IDs:", uniqueSenderIds);

        // Fetch user full names based on IDs
        const userFullnamesResponse = await axios.get(
          `http://localhost:3000/Emregister`,
          {
            params: { ids: uniqueSenderIds.join(",") },
          }
        );

        console.log("User Fullnames Response:", userFullnamesResponse.data);

        // Process and format user data
        const userFullnames = userFullnamesResponse.data.reduce((acc, user) => {
          if (user._id) {
            acc[user._id] = {
              companyName: user.companyName || "Unknown",
              companyLogo: user.companyLog || `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`,
            };
          }
          return acc;
        }, {});
        setUserFullnames(userFullnames);
        console.log("User Fullnames:", userFullnames);
      } catch (error) {
        console.log("Error fetching messages:", error.message);
      }
    };

    fetchMessages();
  }, [id]);

  useEffect(() => {
    const fetchChatMessages = async () => {
      if (selectedSenderId) {
        try {
          const response = await axios.get(
            `http://localhost:3000/message/${id}/${selectedSenderId}`
          );
          setChatMessages(response.data);
        } catch (error) {
          console.error("Error fetching chat messages:", error.message);
        }
      }
    };

    fetchChatMessages();
  }, [selectedSenderId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    const handleMessage = (msg) => {
      setChatMessages((prevMessages) => {
        if (prevMessages.find((message) => message._id === msg._id)) {
          return prevMessages;
        }
        return [...prevMessages, msg];
      });
    };

    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleSenderIdClick = (senderId) => {
    setSelectedSenderId(senderId);
  };

  const userSendMessage = async () => {
    if (!selectedSenderId || !sendMessage.trim()) return;

    const messageData = {
      senderId: id,
      receiverId: selectedSenderId,
      message: sendMessage.trim(),
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/message/${id}/${selectedSenderId}`,
        messageData
      );
      setChatMessages((prevMessages) => [...prevMessages, response.data]);
      setSendMessage("");
      socket.emit("message", response.data);
    } catch (error) {
      console.error("Error sending message:", error.message);
    }
  };
  const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      <div className="userMessageMain">
        <UserNavbar />
        <div className="userMessagecontainer">
          <div className="employerList">
            <ul>
              {uniqueSenderIds
                .filter((senderId) => userFullnames[senderId]) // Ensure each ID has corresponding user data
                .map((senderId) => {
                  const user = userFullnames[senderId];
                  return (
                    <div
                      key={senderId}
                      className="UserName"
                      onClick={() => handleSenderIdClick(senderId)}
                    >
                      <img
                        src={user?.companyLogo || `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`}
                  
                        className="profilePic"
                      />
                      <span>
                        {user?.companyName || "Unknown Company"}
                      </span>
                    </div>
                  );
                })}
            </ul>
          </div>
          <div className="employerChat">
            {selectedSenderId && (
              <div className="selectedSender">
                <h5>
          {userFullnames[selectedSenderId]?.companyName || "Unknown Company"}
                 
                </h5>
            
              </div>
            )}

            <div className="chatArea">
              <div className="chatMessagesContainer">
                {chatMessages.length > 0 ? (
                  <ul className="chatMessagesList">
                    {chatMessages.map((msg, index) => (
                      <li
                        key={index}
                        className={`chatMessage ${
                          msg.senderId === id ? "sentMessage" : "receivedMessage"
                        }`}
                      >
                        <p>{msg.message}</p>
                        <span className="message-time">
                      {formatTime(msg.createdAt)}
                    </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No messages yet</p>
                )}
                <div ref={chatEndRef}></div>
              </div>
              <div className="messageInput">
                <input
                  type="text"
                  value={sendMessage}
                  onChange={(e) => setSendMessage(e.target.value)}
                  placeholder="Type your message"
                />
                <button onClick={userSendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { UserMessage };

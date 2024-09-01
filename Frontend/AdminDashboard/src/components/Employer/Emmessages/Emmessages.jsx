import { useEffect, useRef, useState } from "react";
import "./Emmessages.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io('http://localhost:3001'); // Your backend URL

const Emmessage = () => {
  const { id: senderId } = useParams();
  const [selectedUser, setSelectedUser] = useState(null);
  const [sendMessage, setSendMessage] = useState("");
  const [userList, setUserList] = useState([]);
  const [employerMessages, setEmployerMessages] = useState([]);
  const [userFullnames, setUserFullnames] = useState([]);

  const messageEndRef = useRef(null); // Ref to the end of the messages list

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/userApplyedJob/${senderId}`
        );
        setUserList(response.data);

        const userIds = Array.from(new Set(response.data.map((user) => user.userId)));

        const userFullnamesResponse = await axios.get(
          `http://localhost:3000/UserRegister`,
          {
            params: { ids: userIds.join(',') },
          }
        );

        const userFullnames = userFullnamesResponse.data.reduce((acc, user) => {
          if (!acc[user._id]) {
            acc[user._id] = {
              fullName: user.fullName,
              profilePicUrl: user.profilePicUrl || `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`
            };
          }
          return acc;
        }, {});
        setUserFullnames(userFullnames);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUserList();
  }, [senderId]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [employerMessages]);

  useEffect(() => {
    socket.on('message', (msg) => {
      // Ensure to avoid duplicates
      setEmployerMessages((prevMessages) => {
        if (!prevMessages.find(message => message._id === msg._id)) {
          return [...prevMessages, msg];
        }
        return prevMessages;
      });
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleUserClick = async (userId) => {
    setSelectedUser(userId);
    try {
      const response = await axios.get(
        `http://localhost:3000/message/${senderId}/${userId}`
      );
      setEmployerMessages(response.data);
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    }
  };

  const handleSendMessage = async () => {
    if (!selectedUser || !sendMessage.trim()) return;

    const messageData = {
      senderId: senderId,
      receiverId: selectedUser,
      message: sendMessage.trim(),
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/message/${senderId}/${selectedUser}`,
        messageData
      );

      // Send the message to the server
      socket.emit('message', response.data); 

      // Add message to the UI
      setEmployerMessages((prevMessages) => [...prevMessages, response.data]);
      setSendMessage(""); // Clear the input
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      <div className="messageBody">
        <div className="messagecontainer">
          <div className="userBox">
            {userList
              .filter((user, index, self) =>
                index === self.findIndex((t) => t.userId === user.userId)
              )
              .map((user) => (
                <div
                  key={user._id}
                  className="UserName"
                  onClick={() => handleUserClick(user.userId)}
                >
                  <img 
                    src={userFullnames[user.userId]?.profilePicUrl || `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`} 
                    alt={userFullnames[user.userId]?.fullName} 
                    className="profilePic" 
                  />
                  {userFullnames[user.userId]?.fullName || user.userId}
                </div>
              ))}
          </div>

          {selectedUser ? (
            <div className="chatBox">
           
              <div className="userselectChat">
                <h5>Chat with {userFullnames[selectedUser]?.fullName || selectedUser}</h5>
              </div>
              <div className="message-list">
                {employerMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`message-item ${
                      message.senderId === senderId
                        ? "sent-message"
                        : "received-message"
                    }`}
                  >
                    {message.message}
                    <span className="message-time">
                      {formatTime(message.createdAt)}
                    </span>
                  </div>
                ))}
                <div ref={messageEndRef} /> {/* Empty div for scrolling */}
              </div>
              <div className="sendArea">
                <input
                  value={sendMessage}
                  onChange={(e) => setSendMessage(e.target.value)}
                  className="chatinput"
                  type="text"
                />
                <button onClick={handleSendMessage} className="chatBtn">
                  Send
                </button>
              </div>
            </div>
          ):(
            <div className="no-user-selected">
            <h3> Not user to start chatting</h3> 
          </div>
          )
          }
        </div>
      </div>
    </>
  );
};

export { Emmessage };

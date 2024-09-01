import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SendMessage = () => {
  const [usermessage, setUsermessage] = useState("");
  const [response, setResponse] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { senderId, receiverId } = useParams();

  const handleMessageChange = (e) => {
    setUsermessage(e.target.value);
  };

  const sendMessage = async () => {
    console.log("Sender ID:", senderId);
    console.log("Receiver ID:", receiverId);

    if (!senderId || !receiverId) {
      setError("Sender or Receiver ID is missing.");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/message/${senderId}/${receiverId}`, {
        message: usermessage,
      });
      setResponse(response.data);
      setError(null); // Clear any previous error
      setUsermessage(""); // Clear the input field after sending the message
      fetchMessages(); // Refresh the messages after sending a new one
    } catch (err) {
      setError(err.message);
      setResponse(null); // Clear any previous response
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/message/${senderId}/${receiverId}`);
      setMessages(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [senderId, receiverId]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="sendbox">
      <input 
        type="text" 
        value={usermessage} 
        onChange={handleMessageChange} 
        placeholder="Type your message here"
      />
      <button onClick={sendMessage}>Send Message</button>
      {response && <p className="response">{response.message}</p>}
      {messages.length > 0 ? (
        messages.map((msg) => (
          <div key={msg._id} className="message-item">
            <p>{msg.message}</p>
          </div>
        ))
      ) : (
        <p>No messages available</p>
      )}
      {error && <p className="error">Error: {error}</p>}
    </div>
  );
};

export { SendMessage };

import { AdminHome } from "../AdminHome/AdminHome";

import { useState } from "react";
import "./Communication.css";
import { NavBar } from "../AdminHome/navbar";

const CommunicationTools = () => {
  // State for email notifications and announcements
  const [emailNotifications, setEmailNotifications] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [newNotification, setNewNotification] = useState("");
  const [newAnnouncement, setNewAnnouncement] = useState("");

  // Function to handle adding new email notification
  const handleAddNotification = () => {
    if (newNotification.trim() !== "") {
      setEmailNotifications([...emailNotifications, newNotification]);
      setNewNotification("");
    }
  };

  // Function to handle adding new announcement
  const handleAddAnnouncement = () => {
    if (newAnnouncement.trim() !== "") {
      setAnnouncements([...announcements, newAnnouncement]);
      setNewAnnouncement("");
    }
  };

  return (
    <div className="communication-page">
      <AdminHome />
      <div className="communicationNav">
        <NavBar />
       
      <div className="section">
      <h2>Email</h2>
       
          <div className="notification-list">
            {emailNotifications.length === 0 ? (
              <p>No email notifications available.</p>
            ) : (
              <ul>
                {emailNotifications.map((notification, index) => (
                  <li key={index}>{notification}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="notification-form">
            <input
              type="text"
              placeholder="New Email Notification"
              value={newNotification}
              onChange={(e) => setNewNotification(e.target.value)}
            />
            <button onClick={handleAddNotification}>Add Notification</button>
          </div>
        </div>

        <div className="section">
          <h2>Announcements</h2>
          <div className="announcement-list">
            {announcements.length === 0 ? (
              <p>No announcements available.</p>
            ) : (
              <ul>
                {announcements.map((announcement, index) => (
                  <li key={index}>{announcement}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="announcement-form">
            <input
              type="text"
              placeholder="New Announcement"
              value={newAnnouncement}
              onChange={(e) => setNewAnnouncement(e.target.value)}
            />
            <button onClick={handleAddAnnouncement}>Add Announcement</button>
          </div>
      
      </div>
      </div>
    </div>
  );
};

export { CommunicationTools };

import { useEffect, useState } from 'react';
import './usermanagement.css';
import { AdminHome } from '../AdminHome/AdminHome';
import { NavBar } from '../AdminHome/navbar';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/UserRegister")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/UserRegister/${id}`)
      .then(() => {
        // Remove the deleted user from the state
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the user!", error);
      });
  };

  return (
    <div className="usertable">
      <AdminHome />
      <div className="usernav">
        <NavBar />
        <table className="user-table">
          <thead className='userHeaderList'>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Professional Title</th>
              <th>Current Job Title</th>
              <th>Skills</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className='user-info'>
                    <div>
                      <p className='name'>{user.fullName}</p>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.professionalTitle}</td>
                <td>{user.currentJobTitle}</td>
                <td>{user.skills}</td>
                <td className='userlistbtn'>
                  <button className="delete-btn" onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { UserManagement };

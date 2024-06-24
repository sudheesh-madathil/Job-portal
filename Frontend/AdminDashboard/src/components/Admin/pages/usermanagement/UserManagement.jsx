import { useState } from 'react';
import './usermanagement.css'
import { AdminHome } from '../AdminHome/AdminHome';
import { NavBar } from '../AdminHome/navbar';


const UserManagement = () => {
  const initialUsers = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      title: 'Software Engineer',
      department: 'IT department',
      status: 'Active',
      position: 'Senior',
      avatar: 'https://mdbootstrap.com/img/new/avatars/8.jpg'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@gmail.com',
      title: 'Consultant',
      department: 'Finance',
      status: 'Onboarding',
      position: 'Junior',
      avatar: 'https://mdbootstrap.com/img/new/avatars/6.jpg'
    },
    {
      id: 3,
      firstName: 'Joe',
      lastName: 'Doe',
      email: 'joe.doe@gmail.com',
      title: 'Designer',
      department: 'UI/UX',
      status: 'Awaiting',
      position: 'Senior',
      avatar: 'https://mdbootstrap.com/img/new/avatars/7.jpg'
    },
    {
      id: 4,
      firstName: 'Kevin',
      lastName: 'Smith',
      email: 'kevin.smith@gmail.com',
      title: 'Product Manager',
      department: 'Product',
      status: 'Active',
      position: 'Mid',
      avatar: 'https://mdbootstrap.com/img/new/avatars/6.jpg'
    },
    {
      id: 5,
      firstName: 'Emily',
      lastName: 'Johnson',
      email: 'emily.johnson@gmail.com',
      title: 'HR Manager',
      department: 'HR',
      status: 'Active',
      position: 'Senior',
      avatar: 'https://mdbootstrap.com/img/new/avatars/7.jpg'
    },
    {
      id: 6,
      firstName: 'Emily',
      lastName: 'Johnson',
      email: 'emily.johnson@gmail.com',
      title: 'HR Manager',
      department: 'HR',
      status: 'Active',
      position: 'Senior',
      avatar: 'https://mdbootstrap.com/img/new/avatars/7.jpg'
    },
    {
      id: 7,
      firstName: 'Emily',
      lastName: 'Johnson',
      email: 'emily.johnson@gmail.com',
      title: 'HR Manager',
      department: 'HR',
      status: 'Active',
      position: 'Senior',
      avatar: 'https://mdbootstrap.com/img/new/avatars/7.jpg'
    },
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log('Edit user with id:', id);
  };

  return (
    <div className="usertable">
      <AdminHome/>
      <div className="usernav">
      <NavBar/>

     
    
  
      <table className="user-table">
    
        <thead className='userHeaderList'>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Status</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className='user-info'>
                  <img
                    src={user.avatar}
                    alt={`${user.firstName} ${user.lastName}`}
                    className='avatar'
                  />
                  <div>
                    <p className='name'>{`${user.firstName} ${user.lastName}`}</p>
                    <p className='email'>{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='title'>{user.title}</p>
                <p className='department'>{user.department}</p>
              </td>
              <td>
                <span className={`badge ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
              <td className='position'>{user.position}</td>
              <td className='userlistbtn'>
                <button className="edit-btn" onClick={() => handleEdit(user.id)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(user.id)}>
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
}

export { UserManagement };

import { useState } from 'react';
import './jobmanagement.css';
import { AdminHome } from '../AdminHome/AdminHome';
import { NavBar } from '../AdminHome/navbar';

const JobManagement = () => {
  const initialJobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      status: 'Active',
      applications: 5,
      category: 'IT',
    },
    {
      id: 2,
      title: 'Graphic Designer',
      company: 'Design Studio',
      status: 'Closed',
      applications: 2,
      category: 'Design',
    },
    {
      id: 3,
      title: 'Financial Analyst',
      company: 'Finance Group',
      status: 'Expired',
      applications: 8,
      category: 'Finance',
    },
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [categories, setCategories] = useState(['IT', 'Design', 'Finance']);

  const handleEdit = (id) => {
    console.log('Edit job with id:', id);
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleStatusChange = (id, status) => {
    setJobs(jobs.map(job => (job.id === id ? { ...job, status } : job)));
  };

  const handleCategoryAdd = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <div className="job-management">
  
      <AdminHome />

      <div className="job-dashboard">
      <NavBar />
        <table className="job-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Status</th>
              <th>Applications</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>
                  <select 
                    value={job.status} 
                    onChange={(e) => handleStatusChange(job.id, e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Closed">Closed</option>
                    <option value="Expired">Expired</option>
                  </select>
                </td>
                <td>{job.applications}</td>
                <td>{job.category}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(job.id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(job.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="category-management">
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        <button className="add-category-btn" onClick={() => handleCategoryAdd('New Category')}>Add Category</button>
      </div>
    </div>
  );
}

export { JobManagement };

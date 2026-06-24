import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FiTrash2 } from 'react-icons/fi';

function Admin() {
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSubmissions = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contact');
      if (res.data.success) {
        setSubmissions(res.data.data);
      }
    } catch (err) {
      toast.error('Failed to fetch submissions');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      try {
        const res = await axios.delete(`http://localhost:5000/api/contact/${id}`);
        if (res.data.success) {
          toast.success('Submission deleted');
          setSubmissions(submissions.filter(sub => sub._id !== id));
        }
      } catch (err) {
        toast.error('Failed to delete submission');
      }
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '4rem' }}>
      <div className="page-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Admin <span className="text-gradient">Dashboard</span>
        </motion.h1>
        <p>Manage contact form submissions here.</p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="stat-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '2rem' }}>{submissions.length}</h3>
            <p>Total Messages</p>
          </div>
        </div>

        {isLoading ? (
          <p style={{ textAlign: 'center' }}>Loading submissions...</p>
        ) : submissions.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No submissions found.</p>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub._id}>
                    <td>{new Date(sub.createdAt).toLocaleDateString()}</td>
                    <td>{sub.name}</td>
                    <td><a href={`mailto:${sub.email}`} style={{ color: 'var(--primary-color)' }}>{sub.email}</a></td>
                    <td style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {sub.message}
                    </td>
                    <td>
                      <button className="btn-danger" onClick={() => handleDelete(sub._id)} title="Delete">
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Admin;

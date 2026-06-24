import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { name, email, message } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await axios.post(`${apiUrl}/api/contact`, formData);
      if (res.data.success) {
        toast.success('Form Submitted Successfully');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="page-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in <span className="text-gradient">Touch</span>
        </motion.h1>
        <p>We'd love to hear from you. Fill out the form below to connect.</p>
      </div>

      <motion.div 
        className="form-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={name} 
              onChange={onChange} 
              className="form-control" 
              placeholder="Enter your full name"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              onChange={onChange} 
              className="form-control" 
              placeholder="Enter your email address"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={message} 
              onChange={onChange} 
              className="form-control" 
              placeholder="How can we help you?"
              required 
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: '100%' }}>
            {isSubmitting ? 'Submitting...' : 'Submit Message'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;

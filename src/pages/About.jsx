import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="container">
      <div className="page-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About <span className="text-gradient">Us</span>
        </motion.h1>
        <p>Learn more about our mission and vision.</p>
      </div>

      <motion.div 
        className="form-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ maxWidth: '800px', textAlign: 'center' }}
      >
        <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          She Can Foundation is dedicated to empowering students from all backgrounds by providing access to quality education, mentorship, and resources needed to thrive in the modern tech landscape. We believe that everyone deserves a fair chance to showcase their talent and build a rewarding career.
        </p>

        <h2 style={{ marginBottom: '1.5rem' }}>Our Vision</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          To create a world where every young individual has the tools, confidence, and opportunity to innovate and lead in their communities, bridging the gap between potential and success.
        </p>
      </motion.div>
    </div>
  );
}

export default About;

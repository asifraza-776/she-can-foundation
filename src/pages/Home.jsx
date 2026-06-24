import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUsers, FiBookOpen, FiCalendar } from 'react-icons/fi';

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Empowering Youth Through <span className="text-gradient">Education & Innovation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join us in our mission to provide resources, guidance, and opportunities to students worldwide. Together, we can build a brighter future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-primary">Join Us Today</Link>
          </motion.div>
        </div>
      </section>

      <section className="container">
        <div className="stats">
          <motion.div 
            className="stat-card"
            whileHover={{ y: -10 }}
          >
            <FiUsers size={48} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
            <h3>500+</h3>
            <p>Dedicated Volunteers</p>
          </motion.div>
          <motion.div 
            className="stat-card"
            whileHover={{ y: -10 }}
          >
            <FiBookOpen size={48} color="var(--secondary-color)" style={{ marginBottom: '1rem' }} />
            <h3>1000+</h3>
            <p>Students Supported</p>
          </motion.div>
          <motion.div 
            className="stat-card"
            whileHover={{ y: -10 }}
          >
            <FiCalendar size={48} color="var(--success-color)" style={{ marginBottom: '1rem' }} />
            <h3>50+</h3>
            <p>Events Organized</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;

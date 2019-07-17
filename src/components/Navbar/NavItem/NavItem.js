import React from 'react';
import { motion } from 'framer-motion';
import { withRouter } from 'react-router-dom';

const NavItem = ({ to, children, onClick, ...props }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  return (
    <motion.a
      variants={variants}
      whileHover={{ scale: 1.05 }}
      className="Navbar__list-link link"
      onClick={!!onClick ? onClick : () => props.history.push(to)}
    >
      {children}
    </motion.a>
  );
};

export default withRouter(NavItem);

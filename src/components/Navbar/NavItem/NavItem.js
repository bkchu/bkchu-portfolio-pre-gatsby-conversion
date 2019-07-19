import React from 'react';
import { motion } from 'framer-motion';
import { withRouter } from 'react-router-dom';

const NavItem = ({
  to,
  children,
  onClick,
  className,
  animate,
  initial,
  ...props
}) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: 'spring', stiffness: 30 }
      }
    },
    closed: {
      y: 10,
      opacity: 0,
      transition: {
        y: { stiffness: 20 }
      }
    },
    logoOpen: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: 'spring', stiffness: 20 },
        delay: 0.93
      }
    },
    logoClosed: {
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
      className={className}
      onClick={!!onClick ? onClick : () => props.history.push(to)}
      animate={animate}
      initial={initial}
      role="link"
      tabIndex="0"
    >
      {children}
    </motion.a>
  );
};

export default withRouter(NavItem);

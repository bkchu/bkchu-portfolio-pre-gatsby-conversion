import React from 'react';
import { motion } from 'framer-motion';

const Jumbo = () => {
  const variants = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
  }
  return (
    <div className="Jumbo">
      <div className="container">
        <motion.h2
          initial="hidden"
          animate="visible"
          transition={{ type: 'spring', damping: 20, stiffness: 300, delay: 0.3 }}
          // initial={false}
          variants={variants}
          className="Jumbo__description"
        >
          <span className="Jumbo__name">I'm Brandon.</span>
          <br />
          I'm a UI Developer curating experiences that are pleasing and
          accessible.
        </motion.h2>
      </div>
    </div>
  );
};

export default Jumbo;

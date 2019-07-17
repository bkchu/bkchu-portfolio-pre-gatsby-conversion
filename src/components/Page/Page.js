import React, { Component, Fragment } from 'react';
import Footer from '../Footer/Footer';
import { motion, AnimatePresence } from 'framer-motion';

class Page extends Component {
  componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  render() {
    const { children } = this.props;

    const pageVariants = {
      hidden: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 }
        }
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.75,
          y: { stiffness: 1000, velocity: -100 }
        }
      },
      exiting: {
        y: 50,
        opacity: 0,
        transition: {
          delay: 1,
          y: { stiffness: 1000 }
        }
      }
    };

    const loadingBarStates = {
      right: [100, 70, 0, 0, 0].map(val => `${val * .01 * window.innerWidth}px`),
      opacity: [0, 1, 1, 1, 0]
    };

    return (
      <Fragment>
        <motion.div
          animate={loadingBarStates}
          transition={{
            duration: 1.05,
            times: [0, 0.4, 0.5, 0.8, 1],
          }}
          className="Page__load-indicator"
        />
        <div className="Page">
          <AnimatePresence>
            <motion.div
              key={children}
              initial="hidden"
              animate="visible"
              exit="exiting"
              variants={pageVariants}
              className="container"
            >
              {children}
            </motion.div>
          </AnimatePresence>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Page;

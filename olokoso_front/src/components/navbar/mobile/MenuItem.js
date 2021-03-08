import * as React from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  nom,
  path,
  toggleOpen,
  currentPage,
  estDansHome,
  active,
  id,
  IsActiveButton,
  location,
}) => {

  const createLink = () => {
    if(estDansHome){
      return (
        <div
          key={nom}
          onClick={IsActiveButton(id)}
          className={active && location.pathname === path ? "active" : undefined}
        >
          <Link
            to={path}            
            onClick={toggleOpen}
            key={nom}
            className={active && location.pathname === path ? "active" : undefined}
          >
              {nom}
          </Link>
          </div>
      )
    }
    else {
      return (
        <div
          key={path}
          onClick={IsActiveButton(id)}
          className={active || location.pathname === path ? "active" : undefined}
        >
          <Link
            to={path}            
            onClick={toggleOpen}
            key={nom}
            className={active || location.pathname === path ? "active" : undefined}
          >
              {nom}
          </Link>
        </div>
      )
    }
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >     
      {createLink()}   
      
    </motion.li>
  );
};

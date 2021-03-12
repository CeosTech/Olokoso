import * as React from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";

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
  toggleOpen,
  key,
  path,
  nom,
  id,
  activeButton,
  setActiveButton,
}) => {

  const createLink = () => {
      return (
        <NavLink
          to={path}
          key={id}
          exact
          className={activeButton === id ? 'navLink--active' : 'navLink--dormant'}
          onClick={() => {setActiveButton(id)}}    
        >
          {nom}

        </NavLink>
      )
  };

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

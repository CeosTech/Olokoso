import React, { useContext, useReducer, createContext } from "react";
import reducer from "./reducer";
export const NavBarContext = createContext();

const initialState = [
  { path: "/", id: "home", nom: "Accueil", estDansHome: true, active: true },

  { path: "/", id: "brunch", nom: "Restaurant", estDansHome: true, active: false },

  { path: "/commander", id: "commander", nom: "Carte", estDansHome: false, active: false },

  {
    path: "/brunch",
    id: "brunch",
    nom: "Brunch",
    estDansHome: false,
    active: false,
  },
  
  { path: "/", id: "contact", nom: "Contact", estDansHome: true, active: false },

  
  { 
    path: "/galerie", 
    id: "galerie", 
    nom: "Photos", 
    estDansHome: false,
     active: false 
  },

  {
    path: "/panier",
    id: "panier",
    nom: "Mon panier",
    estDansHome: false,
    active: false,
    isBasket: true,
  },
];

const NavBarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NavBarContext.Provider value={{ state, dispatch }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBarStateValue = () => useContext(NavBarContext);

export default NavBarContextProvider;



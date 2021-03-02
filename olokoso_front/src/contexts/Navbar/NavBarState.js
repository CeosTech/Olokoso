import React, { useContext, useReducer, createContext } from "react";
import reducer from "./reducer";
export const NavBarContext = createContext();

const initialState = [
  { path: "/", id: "home", nom: "Accueil", estDansHome: true, active: true },

  { path: "/commander", id: "commander", nom: "La carte", estDansHome: false, active: false },
  
  { path: "/", id: "equipe", nom: "L'équipe", estDansHome: true, active: false },

  { path: "/", id: "restaurant", nom: "Notre restaurant", estDansHome: true, active: false },

  {
    path: "/contact",
    id: "traiteur",
    nom: "Traiteur",
    estDansHome: false,
    active: false,
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

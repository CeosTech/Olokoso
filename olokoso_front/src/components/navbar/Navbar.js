import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import olokoso_logo from "../../images/olokoso_logo.png";
import {  useLocation } from "react-router-dom";
import NavMobile from "./mobile/NavMobile";
import { NavLink } from 'react-router-dom';

import {
  getNombresArticles,
  smoothScroll,
} from "../../utilities";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { useSelector } from "react-redux";
import { selectBaskets } from "../../app/Redux-slices/basketsSlice";
import { IconButton } from "@material-ui/core";
import { OverlayTrigger, Popover } from "react-bootstrap";

//Two cases in the navbar :
// *Links in the homepage ('/'), but that need to be scrolled to
// *Links not in the homepage that need to redirected to

// Solution :
// * state activeButton that allows to define on which link we just have clicked, to display it as active (different color, thanks to a different className)

// * function findNavbarItemFromLocation that allows to find the location (after a refresh for exemple it's useful to know on which page we are) and will set the activeButton to the page we are on

//* A function smoothScroll that will scroll to the selected component on the homepage => used in the hook useEffect so that it's triggered after the component is mounted and the change of page is effective.

const NavBar = () => {
  const nav = useRef(null);
  const location = useLocation();
  const baskets = useSelector(selectBaskets);


const navLinks = [
  { path: "/", id: "home", nom: "Accueil"},

  { path: "/", id: "restaurant", nom: "Restaurant"},

  { path: "/commander", id: "commander", nom: "Carte"},

  { path: "/brunch", id: "brunch", nom: "Brunch"},
  
  { path: "/", id: "contact", nom: "Contact" },
  
  { path: "/galerie", id: "galerie", nom: "Photos"},
];


const findNavbarItemFromLocation = () => {
  const navLinkItem = navLinks.find(navLink => navLink.path === location.pathname);
  if (navLinkItem === undefined) return 'panier';
  else return navLinkItem.id;
}

const [activeButton, setActiveButton] = useState(findNavbarItemFromLocation());

  // Similaire à componentDidMount et componentDidUpdate :
useEffect(() => {
  smoothScroll(activeButton);
});

const regex = /^\/admin/g;
  if (!location.pathname.match(regex)) {
    return (
      <nav
        className='navbar'
        id='navbar'>
        <div className='navbar__container'>  
        
        {/*HOME LOGO*/}
        <div className='navbar__logo-container'>
          <NavLink
            to="/"
            key='home'
            exact
          >
            <img
              className='navbar__logo'
              src={olokoso_logo}
              alt='Olokosso logo'
            />
          </NavLink>
        </div>
        
        <div className='navbar__links'> 

{/* ALL OTHER NAVLINKS */}

            {navLinks.map(navLink => {
              return (
                <NavLink
                  to={navLink.path}
                  key={navLink.id}
                  exact
                  className={activeButton === navLink.id ? 'navLink--active' : 'navLink--dormant'}
                  onClick={() => {setActiveButton(navLink.id)}}    
                >
                  {navLink.nom}

                </NavLink>
              )
            })}

  {/*CART*/}
              <NavLink
                to="/panier"
                key="panier"
                exact              
                className={activeButton === 'panier' ? 'navLink--active' : 'navLink--dormant'}
                onClick={() => {setActiveButton('panier')}}  
              >
                <div
                  className='navbar__links-basket basket'
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <i className='fas fa-shopping-basket'></i> Panier
                    <span>{getNombresArticles(baskets)}</span>
                  <OverlayTrigger
                    trigger={baskets.length ? ["click"] : ["hover", "focus"]}
                    placement='bottom'
                    rootClose={true} // when we click outside , we can close the overlay
                    overlay={
                      <Popover>
                        <Popover.Title as='h3' className='text-center'>
                          Votre panier {!baskets.length && "est vide"}
                        </Popover.Title>
                        {/* quand le panier est rempli*/}
                        {!!baskets.length && (
                          <Popover.Content>
                            {baskets.map((item) => (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px 0",
                                }}>                                  
                                <p
                                  style={{
                                    margin: "0 5px 0",
                                  }}>
                                  {item.nom}
                                </p>
                                <p
                                  style={{
                                    margin: "0 5px 0",
                                  }}>
                                  {(item.quantite * item.prix).toFixed(2)}€
                                </p>
                              </div>
                            ))}
                          </Popover.Content>
                        )}
                      </Popover>
                    }>
                    <IconButton>
                      <ArrowDropDownIcon />
                    </IconButton>
                  </OverlayTrigger>
                </div>
              </NavLink>

            </div>

          <NavMobile
            navLinks={navLinks}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          /> 
        </div>
      </nav>
    );
  }

  return null;
};

export default NavBar;

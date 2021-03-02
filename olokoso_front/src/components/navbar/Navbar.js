import React, { useRef, useEffect, useMemo, useState } from "react";
import Logo from "../../images/logo.png";
import "./navbar.css";

import { Link, useLocation, useHistory } from "react-router-dom";
import NavMobile from "./mobile/NavMobile";

import {
  debounce,
  getNombresArticles,
  isIntersecting,
  smoothScroll,
} from "../../utilities";
import { useNavBarStateValue } from "../../contexts/Navbar/NavBarState";
import { SET_ACTIVE } from "../../contexts/Navbar/actiontypes";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { useSelector } from "react-redux";
import { selectBaskets } from "../../app/Redux-slices/basketsSlice";
import { IconButton } from "@material-ui/core";
import { OverlayTrigger, Popover } from "react-bootstrap";

const NavBar = () => {
  const nav = useRef(null);
  const location = useLocation();
  const history = useHistory();
  const currentPage = useMemo(() => location.pathname, [location.pathname]);
  // const [activeButton, setActiveButton] = useState("home");
  const { state, dispatch } = useNavBarStateValue();
  const [showBgNavBar, setShowBgNavBar] = useState(false);
  const baskets = useSelector(selectBaskets);

  
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setShowBgNavBar(true);
    } else {
      setShowBgNavBar(false);
    }
  };


  window.addEventListener("scroll", changeBackground);

  const IsActiveButton = (id) => (e) => {
    console.log("id :: " + id)
    // setActiveButton(id);
    dispatch({
      id,
      type: SET_ACTIVE,
    });
    smoothScroll(id)(e);
  };

  const pushToHome = (id) => (e) => {
    history.push("/");
    IsActiveButton(id)(e);
    // smoothScroll(id)(e);
  };

  const regex = /^\/admin/g;
  if (!location.pathname.match(regex)) {
    return (
      <nav
        onMouseEnter={() => setShowBgNavBar(true)}
        onMouseLeave={() => setShowBgNavBar(false)}
        className={`navbar ${showBgNavBar ? "active" : ""} ${
          location.pathname !== "/" ? "sticky" : ""
        }`}
        ref={nav}
        id='navbar'>
        <div className='navbar__container'>
          <div className='navbar__logo-container'>
            {location.pathname === "/" ? (
              <a href='#home' onClick={IsActiveButton("home")}>
                <img className='navbar__logo' src={Logo} alt='Olokoso logo' />
              </a>
            ) : (
              <Link to='/' onClick={pushToHome("home")}>
                <img className='navbar__logo' src={Logo} alt='Olokoso logo' />
              </Link>
            )}
          </div>
          <div className='navbar__links'>
            {state.map((link) => {
              console.log(link)
              
              //Case if the link is 'panier'
              if (link.isBasket) {
                return (
                  <div
                    key={link.path}
                    className={`${link.active ? "active" : ""
                  }navbar__links-basket`}
                    onClick={pushToHome(link.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    <Link
                      to={link.path}
                      className={`${
                        location.pathname === link.path ? "active " : ""
                      }basket`}>
                      <i className='fas fa-shopping-basket'></i> Panier
                      <span>{getNombresArticles(baskets)}</span>
                    </Link>
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
                                  <img
                                    src={item.img}
                                    alt=''
                                    style={{
                                      maxWidth: "50px",
                                      objectFit: "contain",
                                    }}
                                  />
                                  <p
                                    style={{
                                      margin: "0 5px 0",
                                    }}>
                                    {item.title}
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
                );
              }

              //Case if the link is in the Home one page : allows to mark the clicked link as active (hence highlighting it in the navbar)
              else if (link.estDansHome) {
                   return (
                     <a
                       href={"#" + link.id}
                       key={link.nom}
                       className={link.active ? "active" : undefined}
                       onClick={pushToHome(link.id)}>
                        {link.nom}
                     </a>
                   );
              }

              // Case for other links, that are neither in the homepage, nor the basket.
              else {
                return (
                  <Link
                    to={link.path}
                    key={link.path}
                    className={
                      link.active ? "active" : undefined
                    }
                    onClick={IsActiveButton(link.id)}>
                    {link.nom}
                  </Link>
                );
              }

              // return jsx
              // console.log(location.pathname);
              
            })}
          </div>

          <NavMobile
            currentPage={currentPage}
            IsActiveButton={IsActiveButton}
            // activeButton={activeButton}
          />
        </div>
      </nav>
    );
  }

  return null;
};

export default NavBar;

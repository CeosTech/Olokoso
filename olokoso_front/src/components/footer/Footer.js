import React from "react";

import "./footer.css";
import logo from "../../images/olokoso_logo.png";
import snapchat from "../../images/logo-snapchat.png";
import facebook from "../../images/logo-facebook.png";
import insta from "../../images/logo-insta.png";

import useWindowMatchMedia from "../../hooks/useWindowMatchMedia";
import FooterMobile from "./FooterMobile";
import { useHistory } from "react-router-dom";
import { smoothScroll } from "../../utilities";

const contacts = {
  tel: "0635364499",
  addr: "7 place de l'Hôtel de Ville 93600 Aulnay sous Bois, France",
  email: "contact@markus-app.com",
};

const Footer = () => {
  const history = useHistory();
  // const footer_container_ref = useRef(null);
  // const { height, width } = useDimensions(footer_container_ref);
  const { isInTheMediaQuery } = useWindowMatchMedia(600);

  const pushToCGU = (id) => (e) => {
    history.push("/cgu");
    smoothScroll(id)(e);
  };

  return (
    <div className='footer'>
      {!isInTheMediaQuery ? (
        <div id='footer__container' className='footer__container'>
          <div className="footer__part1">
              <h3 className="footer__title">O'lokosso</h3>
              <p className="footer__adress">114 avenue de verdun,<br/>
              91550 Paray vieille poste</p>
              <p className="olokosso__siret">Immatriculé au RCS de Bobigny<br/>
              Numéro SIRET : </p>
          </div>

          <div className="footer__part2">
              <img
                  className='footer__logo'
                  src={logo}
                  alt='Olokosso logo'
              />
              <p>Made by <span>Ceos Tech</span></p>
              <p>Tout droits réservés ©</p>
          </div>

          <div className="footer__part3">
              <h3 className="footer__title">Rejoignez-nous</h3>
              <div className="footer__social-medias">
                  <a
                      href='https://www.instagram.com/olokoso91/?hl=fr'
                      rel='noreferrer'
                      target='_blank'>
                      <img
                          className='footer__logo-social-medias'
                          src={snapchat}
                          alt='Snapchat logo'
                      />
                  </a>
                  <a
                      href='https://web.facebook.com/OLokoso-363831301133851'
                      rel='noreferrer'
                      target='_blank'>
                      <img
                          className='footer__logo-social-medias'
                          src={facebook}
                          alt='Facebook logo'
                      />
                  </a>
                  <a
                      href='https://www.facebook.com/Markusapp-100288068734888'
                      rel='noreferrer'
                      target='_blank'>
                      <img
                          className='footer__logo-social-medias'
                          src={insta}
                          alt='Instagram logo'
                      />
                  </a>
              </div>
          </div>
      </div>
      ) : (
        <FooterMobile contacts={contacts} pushToCGU={pushToCGU} />
      )}
    </div>
  );
};

export default Footer;

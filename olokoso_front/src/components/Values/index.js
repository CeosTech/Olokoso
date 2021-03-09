import React from "react";

import olokoso_logon from "../../images/olokoso_logo.png";
import valueImage1 from "../../images/value-image-1.png";
import valueImage2 from "../../images/value-image-2.png";
import valueImage3 from "../../images/value-image-3.png";

import { Link } from "react-router-dom";

import "./values.css";

const Values = () => {

  return (
    <div className='values' id='values'>
    <div className='values_header'>
      <img className='logo__values-page' src={olokoso_logon} alt='Logo olokoso' />
      <div className="values__introduction">
        <h2 className='values_title'>Nos valeurs</h2>        
        <p className='values_text'>O'lokoso est une équipe de passionnés et   amoureux de la cuisine africaine, formés pour réjouir votre estomac. O'lokoso est une équipe de passionnés et   amoureux de la cuisine africaine, formés pour réjouir votre estomac.
        </p>
      </div>
    </div>
      
      <div className='values_figure'>
        <div className='values__container'>
          <img className='values__logo' src={valueImage1} alt='Afrique' />
          <p className='values__description'>Une cuisine</p>
          <h2>Authentique</h2>
        </div>
  
        
        <div className='values__container'>          
          <img className='values__logo' src={valueImage2} alt='aliments' />
          <p className='values__description'>Des produits de</p>
          <h2>Qualité</h2>
        </div>
        
        <div className='values__container'>  
          <img className='values__logo' src={valueImage3} alt='cuisinier' />
          <p className='values__description'>Préparé avec</p>
          <h2>Passion</h2>
        </div>
      </div>
      {/*
      <img className='values__bitmoji' src={bitmoji} />
      <img className='values__bitmoji2' src={bitmoji} />
      <img className='values__bitmoji3' src={bitmoji} />
      */}

      <div className= "values__link-container">
        <Link 
          to="/commander" 
          className='telecharger_btn values__button'
        >
          Commander
        </Link>
      </div>

    </div>
  );
};

export default Values;
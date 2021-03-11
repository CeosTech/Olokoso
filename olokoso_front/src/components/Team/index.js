import React from "react";
import olokoso_logon from "../../images/olokoso_logonoir.png";
import "./team.css";
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import figure from "../../images/figure.png";
import bitmoji from "../../images/bitmoji.png";
const Team = () => {

  return (
    <div className='team' id='team'>
      <div className='team_header'>
        <img className='logo__team-page' src={olokoso_logon} alt='Logo olokoso' />
        <div className="team__introduction">
          <h2 className='team_title'>Notre équipe à votre service</h2>        
          <p className='team_text'><span>O’lokoso</span> est une équipe de <span>passionnés</span> et <span>amoureux</span> de la cuisine africaine, formés aux techniques traditionnelles auprès de leurs Mamas. O’lokoso a pour objectif de <span>faire découvrir la richesse gustative de la cuisine africaine</span>.
          </p>
        </div>
      </div>
        
        <div className='team_figure'>
          <div className='personnel__container'>
            <img className='team__logo' src={figure} alt='dessin personnel' />
            <h2>Chef T</h2>
            <p className='team__description'>Fondateur</p>
          </div>
    
          
          <div className='personnel__container'>          
            <img className='team__logo' src={figure} alt='dessin personnel' />
            <h2>Max M</h2>
            <p className='team__description'>Manageur</p>
          </div>
          
          <div className='personnel__container'>  
            <img className='team__logo' src={figure} alt='dessin personnel' />
            <h2>Tommy</h2>
            <p className='team__description'>Cheffe</p>
          </div>

          <div className='personnel__container'>  
            <img className='team__logo' src={figure} alt='dessin personnel' />
            <h2>Tommy</h2>
            <p className='team__description'>Manager</p>
          </div>
        </div>
        {/*
        <img className='team__bitmoji' src={bitmoji} />
        <img className='team__bitmoji2' src={bitmoji} />
        <img className='team__bitmoji3' src={bitmoji} />
        */}
  
    </div>
  );
};

export default Team;
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
      <img className='team__logo' src={olokoso_logon} alt='Markus' />
        <h2 className='team_title'>Notre équipe à votre service</h2>
        </div>
        <p className='team_text'>hdrzgthehsegfjbfjbsilfkbiggrgrgsgrgdgsrgfsgsrgerfsgbefzsgrgesrgregr <br />riugbdkbjkjsfnbkjs
                                 rggergergegehrhethtrgdsefhufieuzhfiuezsub
        </p>
        
        <div className='team_figure'>
        <img className='team__logo' src={figure} alt='Markus' />
  
        <img className='team__logo' src={figure} alt='Markus' />
        <img className='team__logo' src={figure} alt='Markus' />
        </div>
        {/*
        <img className='team__bitmoji' src={bitmoji} />
        <img className='team__bitmoji2' src={bitmoji} />
        <img className='team__bitmoji3' src={bitmoji} />
        */}
        <p className='team_description'>Fondateur et chef de cuisine</p>
  
    </div>
  );
};

export default Team;
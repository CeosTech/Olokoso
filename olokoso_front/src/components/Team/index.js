import React from "react";
import olokoso_logon from "../../images/olokoso_logonoir.png";
import "./team.css";

const Team = () => {

  return (
    <div className='team' id='team'>
      <img className='navbar__logo' src={olokoso_logon} alt='Markus' />
        <h2 className='team_title'>Notre équipe à votre service</h2>
    </div>
  );
};

export default Team;
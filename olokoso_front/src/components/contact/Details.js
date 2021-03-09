import React from "react";

import "./contactdetails.css";


import MapIcon from "@material-ui/icons/Map";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";


const ContactDetails = () => {
  return (
    <div className='contact-details'>
      <div className="contact__information-details">
        <h3>Commander une prestation</h3>
        <p>Pour commander, vous pouvez nous contacter par mail ou par téléphone, ou bien remplir le formulaire ci-contre.</p>
        <div className="contact__mediums">
          <p>adresse mail @</p>
          <button>01 69 72 10 01</button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

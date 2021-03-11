import React, { useRef } from "react";
import ContactForm from "../form";
import Traiteur from "../Traiteur"

import "./contact.css";
import ContactDetails from "./Details";

const Contact = () => {
  const contact_div = useRef(null);

  return (
    <div className="traiteur-contact__container">
      <Traiteur />
      <div className='contact' id='contact' ref={contact_div}>
        <div className='contact__header'> 
            <h2 className='contact_title'>Une question ? Une demande précise ?</h2>        
            <p className='contact__text'>Pour toute demande d’information concernant le restaurant, nos prestations traiteurs ou notre service de brunch, vous pouvez nous contacter soit par <span>mail</span>, soit par <span>téléphone</span> ou bien remplir le <span>formulaire de contact</span> :)
            </p>
        </div>  
                  
        <div className='contact__container'>            
          <ContactDetails />
          <ContactForm />
        </div>
         
      </div>
    </div>
  );
};

export default Contact;

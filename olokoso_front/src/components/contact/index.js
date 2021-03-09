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
            <h2 className='contact_title'>Nous contacter</h2>        
            <p className='contact__text'>O'lokoso est une équipe de passionnés et   amoureux de la cuisine africaine, formés pour réjouir votre estomac. O'lokoso est une équipe de passionnés et   amoureux de la cuisine africaine, formés pour réjouir votre estomac.
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

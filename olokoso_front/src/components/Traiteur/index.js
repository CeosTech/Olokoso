import React from "react";
import olokoso_logon from "../../images/olokoso_logo.png";

import olokoso_logo from "../../images/olokoso_logo.png";
import mafe_lover from "../../images/mafe-lover.png";
import yassa_lover from "../../images/yassa-lover.png";
import photo_traiteur from "../../images/traiteur-photo.jpg";

import Carousel from "react-bootstrap/Carousel";

import "./traiteur.css";

const Traiteur = () => {

    const datas = [
        {
          image: olokoso_logo,
          alt: "Olokosso logo",
        },
        {
          image: mafe_lover,
          alt: "photo du plat mafe",
        },
        {
          image: yassa_lover,
          alt: "photo du plat yassa",
        },
        {
          image: photo_traiteur,   
          alt: "photo de plats à emporter",
        },
      ];

  return (
    <div className='traiteur' id='traiteur'>
        <div className='traiteur_header'>
            <img className='logo__traiteur-page' src={olokoso_logon} alt='Logo olokoso' />
            <div className="traiteur__introduction">
                <h2 className='traiteur_title'>Prestation traiteur</h2>        
                <p className='traiteur_text'>O'lokoso est une équipe de passionnés et   amoureux de la cuisine africaine, formés pour réjouir votre estomac. O'lokoso est une équipe de passionnés et   amoureux de la cuisine africaine, formés pour réjouir votre estomac.
                </p>
            </div>
        </div>

        <div className="traiteur__informations">
            <div className='hero__container__traiteur'>
            <Carousel pause={false}>
                {datas.map((data) => (
                <Carousel.Item interval={5000} className='px-5' key={data.alt}>
                    <div className='carousel__item__traiteur'>            

                        <div className='hero__hero-image__traiteur'>
                        <img
                            className='hero__image__traiteur'
                            src={data.image}
                            alt={data.alt}
                        />
                        </div>
                    </div>
                </Carousel.Item>
                ))}
            </Carousel>
            </div>

            <div className="prestation__traiteur">
                <h2 className='traiteur_title'>Prestation traiteur</h2>        
                <p className='traiteur_text'>O'lokoso est une équipe de passionnés et   amoureux de la cuisine africaine, formés pour réjouir votre estomac. O'lokoso est une équipe de passionnés et   amoureux de la cuisine africaine, formés pour réjouir votre estomac.
                </p>
            </div>

        </div>

    </div>
  );
};

export default Traiteur;

import React from "react";
import "./hero.css";

import olokoso_logo from "../../images/olokoso_logo.png";
import mafe_lover from "../../images/mafe-lover.png";
import yassa_lover from "../../images/yassa-lover.png";
import photo_traiteur from "../../images/traiteur-photo.jpg";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

const datas = [
  {
    en_tete: "O'lokoso",
    sous_texte:
      "L'Afrique aux fourneaux !",
    texte:
    "O'Lokoso est une ode gustative à l'Afrique de l'Ouest. Nous vous proposons des plats issus de la culture Africaine avec une touche qui fait toute la différence !🔥🔥🔥",
    image: olokoso_logo,
    alt: "Olokosso logo",
    lien: { route: "/commander", nom: "Commander" },
  },
  {
    en_tete: "O'lokoso",
    sous_texte:
      "Découvrez le Mafé Lover",
    texte:
    "Ce plat typique d'Afrique de l'Ouest connu pour sa fameuse sauce à base de pâte d'arachide va vous rendre totalement love !!❤️❤️❤️ ",
    image: mafe_lover,
    alt: "photo du plat mafe",
    lien: { route: "/commander", nom: "Commander" },
  },
  {
    en_tete: "O'lokoso",
    sous_texte:
      "Découvrez le Yassa Lover",
      texte:
      "Des oignons frits, du riz, du poulet braisé mariné dans le citron... \n Le yassa vous attend pour nourrir de joie vos papilles 🚀🚀🚀 ",
    image: yassa_lover,
    alt: "photo du plat yassa",
    lien: { route: "/commander", nom: "Commander" },
  },
  {
    en_tete: "O'lokoso",
    sous_texte:
      "Prestation traiteur",
      texte:
      "Une prestation traiteur sur mesure pour agrémenter vos événements",
    image: photo_traiteur,   
    alt: "photo de plats à emporter",
    lien: { route: "/contact", nom: "Contactez-nous" },
  },
];

const hero = () => {
  return (
    <>
      <div className='hero' id='hero'>
        <div className='hero__container'>
          <Carousel pause={false}>
            {datas.map((data) => (
              <Carousel.Item interval={5000} className='px-5' key={data.alt}>
                <div className='carousel__item'>
                  <div className='hero__hero'>
                    <div className='hero__hero-hadings'>

                      <div className='hero__hero-image2'>
                        <img
                          className='hero__image'
                          src={data.image}
                          alt={data.alt}
                        />
                      </div>
                     
                      <p className='hero__entete'>{data.en_tete}</p>
                      <p className='hero__subtext'>{data.sous_texte}</p>
                      <p className='hero__text'>{data.texte}</p>

                      <Link to={data.lien.route} className='telecharger_btn'>
                        {data.lien.nom}
                      </Link>
                    </div>

                    <div className='hero__hero-image'>
                      <img
                        className='hero__image'
                        src={data.image}
                        alt={data.alt}
                      />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default hero;

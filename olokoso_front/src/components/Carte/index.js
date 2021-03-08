import { IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import carteImg from "../../images/olokoso_logo.png";

import "./carte.css";

const Carte = ({ setActive, active, activeCarte, setActiveCarte, categories }) => {

  const createCategoriesList = categories.map(category => (
    {
      libelle: category.nom,
      nom: category.nom,
      id: category.id,
    } 
  )); 

  const [carte, setCarte] = useState(createCategoriesList); 

  console.log('la carte ::' + JSON.stringify(carte))

  return (
    <div className={"carte " + (activeCarte ? "active" : null)}>
      <div className='carte__image-container'>
        <img src={carteImg} alt='olokosso_logo' />
      </div>
      
      <h2 className="carte_title">Notre carte</h2>

      <div className='carte__items'>
        {carte.map((carte) => (
          <p
            key={carte.nom}
            className={`carte__item ${active === carte.id ? "active" : ""}`}
            onClick={() => {
              setActive(carte.id);
              setActiveCarte(false);
            }}>
            {carte.libelle}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Carte;

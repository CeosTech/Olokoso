import { IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import carteImg from "../../images/olokoso_logo.png";

import "./carte.css";

const Carte = ({ setActive, active, activeCarte, setActiveCarte }) => {
  const [carte, setCarte] = useState([
    { libelle: "Entrées", nom: "entrees" },
    { libelle: "Menus", nom: "menus" },
    { libelle: "Plats", nom: "plats" },
    { libelle: "Sur Le Grill", nom: "grill" },
    { libelle: "Accompagnements", nom: "accompagnements" },
    { libelle: "Desserts", nom: "desserts" },
    { libelle: "Boissons", nom: "boissons" },
  ]);

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
            className={`carte__item ${active === carte.nom ? "active" : ""}`}
            onClick={() => {
              setActive(carte.nom);
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

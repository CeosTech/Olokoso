import React from "react";
import "./styles.css";

import boisson from '../../images/boisson.png';
import plat from '../../images/plat.png';
import accompagnement from '../../images/accompagnement.png';

const Menu = ({menuDishes, menuCategories}) => {

const categoriesWished = ['Entrée', 'Plat', 'Boisson'];

  return (
    <div className='menu__order' id='menu__order'> 
        <div className="menu__header">
            <h2>Entrée + Plat + Boisson</h2>
            <div className="menu__header-images">
                <img src={accompagnement} alt="accompagnement"/>
                <img src={plat} alt="plat"/>
                <img src={boisson} alt="boisson"/>
            </div>
            <p className="menu__prix">11€99</p>
            <p className="menu__instuctions">
                Veuillez composer votre menu en choisissant votre entrée, votre plat et votre boisson
            </p>
        </div>

        <div className="menu__items-container">
            <div className="menu__category-container">
                <h3>Votre entrée</h3>
            </div>
            <div className="menu__category-container">
                <h3>Votre plat</h3>
            </div>
            <div className="menu__category-container">
                <h3>Votre boisson</h3>
            </div>
        </div>
    </div>
  );
};

export default Menu;
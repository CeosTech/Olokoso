import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Carte from "../components/Carte";
import Menu from "../components/Menu";
import Card from "../components/Carte/card";

import "./commander.css";

import {sendrequest} from '../middlewares/request'

import { IconButton } from "@material-ui/core";
const Commander = () => {
  const [active, setActive] = useState(1);
  const [activeCarte, setActiveCarte] = useState(true);
  const [datas, setDatas] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);

  // Booleans that will only allow the component to render when the requests have returned the datas
  const [isDataLoading, setDataLoading] = useState(false);
  const [isCategoryLoading, setCategoryLoading] = useState(false);
  // activeCarte && (window.document.body.style.overflow = "hidden")

  activeCarte
    ? (window.document.body.style.overflow = "hidden")
    : (window.document.body.style.overflow = "auto");
  
  const fetchData = async() => {
    sendrequest('get', 'restaurant/produit/', setDatas, setDataLoading)
    sendrequest('get', 'restaurant/categorie/', setMenuCategories, setCategoryLoading)
  }

  useEffect(() => {    
    fetchData();
  }, [active]);

  //Function that will check through if id of the selected menu item matches the one of 'Menu'. If so then we will want to display all of the datas, not just a selection.
  const isMenu = () => {
    for (var i=0; i<menuCategories.length; i++){
      if (menuCategories[i].id === active && menuCategories[i].nom === 'Menu'){
        return datas;       
      };
    }
  }

  const selectDishesPerCategory = () => {
    var menuDishes = isMenu();

    if (menuDishes !== undefined) {
      return <Menu 
              {...menuDishes} 
              {...menuCategories}
            />;
    }

    else {
      const selectedDishes = datas
      // We filter the data :
        .filter((data) => { 
          // By only selecting the data that belongs to a category (categories is an array in which are the different categories to which a dish belongs) that matches the one selected by the user (var active)
          for (var i=0; i<data.categories.length; i++){
            if (data.categories[i] === active) return true;
            return false;
          }
        })
        //Once filtered, we can go through the selection to display them
        .map((data) => {
          return <Card 
              key={data.id} 
              {...data} />;
        });
      return selectedDishes;
    }  
  }

  return (
    <div className='commander'>
      <div className='commander__container'>
      
        {isCategoryLoading && (        
        <Carte
          active={active}
          setActive={setActive}
          activeCarte={activeCarte}
          setActiveCarte={setActiveCarte}
          categories = {menuCategories}
        />
        )}

        {isDataLoading && (
          <>
            <div className='commander__container__cards'>           
              {selectDishesPerCategory()}
            </div>

            <div className={"commander__carte " + (activeCarte ? "white" : null)}>
              <IconButton onClick={() => setActiveCarte(() => !activeCarte)}>
                <i
                  className={
                    "fas fa-arrow-" + (activeCarte ? "left" : "right")
                  }></i>
              </IconButton>
            </div> 
          </>             
        )}
      
      </div>
    </div>
  );
};


export default Commander;

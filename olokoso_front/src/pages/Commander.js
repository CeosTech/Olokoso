import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Carte from "../components/Carte";
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

 {/* Filter will here be used to only display the dishes that belong to the category chosen by the user*/}
        {isDataLoading && (
          <>
            <div className='commander__container__cards'>           
              {datas.filter(data => data.categories[0] === active).map((data) => {
                return <Card 
                    key={data.id} 
                    {...data} />;
              })}
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

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Carte from "../components/Carte";
import Card from "../components/Carte/card";

import "./commander.css";

import { IconButton } from "@material-ui/core";
import axios from "axios";
const Commander = () => {
  const [active, setActive] = useState("burgers");
  const [activeCarte, setActiveCarte] = useState(true);
  const [datas, setDatas] = useState([]);
  // activeCarte && (window.document.body.style.overflow = "hidden")

  activeCarte
    ? (window.document.body.style.overflow = "hidden")
    : (window.document.body.style.overflow = "auto");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/restaurant/produit/"
      );
      console.log('les datas reçues :: ' + JSON.stringify(data))
      setDatas(data);
    };

    fetchData();
  }, [active]);

  return (
    <div className='commander'>
      <div className='commander__container'>
        <Carte
          active={active}
          setActive={setActive}
          activeCarte={activeCarte}
          setActiveCarte={setActiveCarte}
        />
        <div className='commander__container__cards'>
          {datas.map((data) => {
            return <Card key={data.id} {...data} />;
          })}
          {/* {datas?.product
            .filter((data) => data.categ === active.toLowerCase())
            .map((data) => {
              return <Card key={data.id} {...data} />;
            })} */}

          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>

        <div className={"commander__carte " + (activeCarte ? "white" : null)}>
          <IconButton onClick={() => setActiveCarte(() => !activeCarte)}>
            <i
              className={
                "fas fa-arrow-" + (activeCarte ? "left" : "right")
              }></i>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

/* const datas = [
  {
    "id": 1,
    "nom": "Escargot doré",
    "description": "Tout de nacre vêtus, les escargots se prélassent",
    "prix": 0.0,
    "ingredients": ['carottes', 'escargots', 'mamaliga'],
    "categories": ['Entrées'],
    "disponibilite": true,
    "image": "http://localhost:8000/440px-Les_escargots.jpg"
  }
]; */ 

export default Commander;

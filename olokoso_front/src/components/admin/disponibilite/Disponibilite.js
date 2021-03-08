import axios from "axios";
import { useEffect, useState } from "react";
import TableBox from "../../table/Table";

const proprietes = ["Nom", "Catégorie", "Disponibilité"];

const Disponibilite = () => {
  const [items, setItems] = useState([]);

  const get_produits = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/restaurant/produit"
    );

    setItems(data);
  };

  useEffect(() => {
    get_produits();
  }, []);

  console.log(items);

  return (
    <div className='disponibilite admin__container'>
      <TableBox proprietes={proprietes} donnees={items} />
    </div>
  );
};
export default Disponibilite;

import axios from "axios";
import { useEffect, useState } from "react";

import ProductList from "../product/ProductList";

const CommandeEnCours = () => {
  const [commandes, setCommandes] = useState([]);

  const fetchCommandes = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/paiement/commande-encours"
    );
    setCommandes(data);
  };

  useEffect(() => {
    fetchCommandes();

    return () => {
      setCommandes([]);
    };
  }, []);

  const commande_est_livre = async (id) => {
    await axios.put("http://localhost:8000/paiement/update-commande", {
      id,
      est_livre: true,
    });

    fetchCommandes();
  };

  return (
    <div className='commande-en-cours admin__container'>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgb(86 85 85)",
        }}>
        Vos Commandes en cours {commandes.length ? "" : "sont vide"}
      </h1>
      <ProductList
        commandes={commandes}
        action={commande_est_livre}
        btn={"Remise au client"}
        estPrisConnaissance
      />
    </div>
  );
};

export default CommandeEnCours;

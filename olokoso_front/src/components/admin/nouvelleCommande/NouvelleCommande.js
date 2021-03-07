import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../product/ProductList";

const NouvelleCommande = () => {
  const [commandes, setCommandes] = useState([]);

  const fetchCommandes = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/paiement/nouvelle-commande"
    );
    setCommandes(data);
  };

  useEffect(() => {
    fetchCommandes();

    return () => {
      setCommandes([]);
    };
  }, []);

  const commande_est_vue = async (id) => {
    await axios.put("http://localhost:8000/paiement/update-commande", {
      id,
      est_vue: true,
    });

    fetchCommandes();
  };
  // console.log(commandes);
  return (
    <div className='nouvelleCommande admin__container'>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgb(86 85 85)",
        }}>
        {commandes.length
          ? "Vos Nouvelles Commandes"
          : "Pas de Nouvelles commandes"}
      </h1>

      <ProductList
        commandes={commandes}
        action={commande_est_vue}
        btn='confirmer'
      />
    </div>
  );
};

export default NouvelleCommande;

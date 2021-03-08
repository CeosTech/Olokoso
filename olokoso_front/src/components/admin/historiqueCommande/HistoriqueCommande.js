import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../product/ProductList";

const HistoriqueCommande = () => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    const fetchCommandes = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/paiement/historique-commande"
      );
      setCommandes(data);
    };

    fetchCommandes();

    return () => setCommandes([]);
  }, []);

  return (
    <div className='historiqueCommande admin__container'>
      <ProductList commandes={commandes} />
    </div>
  );
};

export default HistoriqueCommande;

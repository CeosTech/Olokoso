import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HistoriqueTableRow from "../historiqueCommande/HistoriqueTableRow.js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import { useEffect, useState } from "react";
import CommandeList from "./CommandeList";
import Product from "./Product";
import { Row } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "3rem auto",
    alignItems: "center",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightMedium,
    color: "black",
    paddingTop: "3%",
    paddingBottom: "1%",
  },

  table: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  detail: {
    fontSize: theme.typography.pxToRem(16), 
    color: "black",
  },

  color: {
    color: "black",
  },
}));

const NouvelleCommande = () => {
  const classes = useStyles();
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
  console.log(commandes);
  return (
    <div className={"nouvelleCommande " + classes.root}>
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
    {/*
          Modification de nouvelle commande :
            - Rajouter l'information sur le type de commande (Livraison/Emporter)
            - Lorsqu'on appui sur les détails afficher les informations de chaque produit
            - Dupliquer le design de nouvelle commande dans  
     */}
      {commandes.map((commande) => (
        <Accordion className={classes.color} key={commande.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <div className={classes.table}>
              <p className={classes.heading}>{new Date(commande.date_commande).toLocaleString()}</p>
              <p className={classes.heading}>{commande.reference}</p>
              <p className={classes.heading}>{commande.client.nom[0] + "." + commande.client.prenom}</p>
              <p className={classes.heading}>Service à rajouter</p>
              <p className={classes.heading}>{commande.prix_totale}€</p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}>
                <CommandeList commandeItem={commande.panier.produits} />
                <div>
                  <p>{commande.client.nom + " " + commande.client.prenom}</p>
                  <p></p>
                </div>
              {/*<Product commande={commande} />*/}
              <Button
                variant='contained'
                color='primary'
                onClick={() => commande_est_vue(commande.id)}>
                Confirmer
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default NouvelleCommande;

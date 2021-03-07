import React from "react";

import "./product.css";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import { getPrixAvecTTC, splitPrix } from "../../../utilities";
import ExpandedIcon from "./ExpandedIcon";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightMedium,
    color: "black",
    width: "20%",
  },
  table: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  accordion: {
    marginTop: "30px",
    position: "relative",
  },
  p: {
    fontWeight: "bold",
    margin: 0,
    width: "20%",
  },
}));

const Product = ({
  commande,
  action = () => {},
  btn = null,
  estPrisConnaissance = false,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Accordion
        className={classes.accordion}
        key={commande.id}
        onChange={(e, expand) => setExpanded(expand)}>
        <AccordionSummary
          className={classes.accordion}
          // expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          {!expanded ? (
            <div className={classes.table}>
              <p className={classes.p}>
                {new Date(commande.date_commande).toLocaleDateString()}
              </p>
              <p className={classes.p}>
                {new Date(commande.date_commande)
                  .toLocaleTimeString()
                  .split(":")
                  .slice(0, 2)
                  .join("h")}
              </p>
              {/* <p className={classes.p}>{commande.reference}</p> */}
              <p className={classes.p}>
                {commande.client.nom[0] + "." + commande.client.prenom}
              </p>
              <p className={classes.p}>{commande.mode || "Livraison"}</p>
              <p className={"commande__prix " + classes.p}>
                {getPrixAvecTTC(commande.prix_totale, 10)}€
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}>
              <p style={{ marginRight: "10px" }}>
                {new Date(commande.date_commande).toLocaleDateString()},{" "}
              </p>
              <p>
                {new Date(commande.date_commande)
                  .toLocaleTimeString()
                  .split(":")
                  .slice(0, 2)
                  .join("h")}
              </p>
            </div>
          )}

          <ExpandedIcon expanded={expanded} setExpanded={setExpanded} />
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              width: "60%",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
            }}>
            {/* <CommandeList commandeItem={commande.panier.produits} /> */}
            <div className='commande__product'>
              {commande.panier.menus.map((menu) => (
                <div
                  className='commande__product-container'
                  key={commande.id.toString() + menu.id.toString()}>
                  <div>
                    <h2 className='commande__product-quantite'>
                      {menu.quantite}x
                    </h2>
                    <h2 className='commande__product-nom'>{menu.menu.nom}</h2>
                  </div>
                  <h2>{splitPrix(menu.menu.prix)}</h2>
                </div>
              ))}
              {commande.panier.produits.map((produit) => (
                <div
                  className='commande__product-container'
                  key={commande.id.toString() + produit.id.toString()}>
                  <div>
                    <h2 className='commande__product-quantite'>
                      {produit.quantite}x
                    </h2>
                    <h2 className='commande__product-nom'>
                      {produit.produit.nom}
                    </h2>
                  </div>
                  <h2>{splitPrix(produit.produit.prix)}</h2>
                </div>
              ))}
            </div>

            <div className='commande__totale'>
              <div className='commande__totale__sous-totale'>
                <p>Sous Total HT </p>
                <p>{splitPrix(commande.prix_totale)}</p>
              </div>

              <div className='commande__totale-details'>
                <div className='commande__totale-mode__container'>
                  <p className='commande__totale-mode'>
                    {commande.mode || "Livraison"}
                  </p>
                  <p className='commande__ref'>{commande.reference}</p>
                </div>

                <div className='commande__totale-ttc'>
                  <p>
                    Total <span>TTC</span>
                  </p>
                  <p>{splitPrix(getPrixAvecTTC(commande.prix_totale, 10))}</p>
                </div>
              </div>
            </div>

            <div className='commande__client'>
              <p className='commande__client__nom'>
                {commande.client.nom + " " + commande.client.prenom}
              </p>
              <p className='commande__client__adresse'>
                {commande.client.adresse}, {commande.client.code_postale}{" "}
                {commande.client.ville}
              </p>
              <p className='commande__client__telephone'>
                {commande.client.telephone}
              </p>
            </div>

            {btn && (
              <Button
                className={[
                  "commande__valider_btn",
                  estPrisConnaissance ? "terminer" : "",
                ].join(" ")}
                variant='contained'
                color='primary'
                onClick={() => action(commande.id)}>
                {btn}
              </Button>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Product;

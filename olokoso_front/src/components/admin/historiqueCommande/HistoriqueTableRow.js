import { IconButton, TableCell, TableRow, TableBody } from "@material-ui/core";
import { useState } from "react";
import Modal from "../../MyModal/Modal";

const HistoriqueTableRow = ({ commande }) => {
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    // console.log(e.target.classList);

    if (
      e.target.classList.contains("myModal__backdrop") ||
      e.target.classList.contains("myModal__modal__close-btn") ||
      e.target.parentNode.classList.contains("myModal__modal__close-btn") ||
      e.target.parentNode.parentNode.classList.contains(
        "myModal__modal__close-btn"
      )
    ) {
      setShow(false);
    }
  };
  //{/*commande.reference*/}
  console.log(commande);
  return (
    <TableRow>
      {/* {new Date(commande.date_commande).toLocaleString()} */}
      <TableCell>
        {new Date(commande.date_commande).toLocaleDateString()}
      </TableCell>
      <TableCell align='center'>
        {new Date(commande.date_commande)
          .toLocaleTimeString()
          .split(":")
          .slice(0, 2)
          .join("h")}
      </TableCell>
      <TableCell align='center'>
        {commande.client.nom[0] + "." + commande.client.prenom}
      </TableCell>
      <TableCell align='center'>à emporter</TableCell>
      <TableCell align='center'>{commande.prix_totale}€</TableCell>

      <Modal showModal={show} setShowModal={setShow} handleClose={handleClose}>
        <Modal.Header>
          <h1>Ref: {commande.reference}</h1>
          {/* <img src={image_url} alt={nom} />
            <p>{splitPrix(prix)}</p> */}
        </Modal.Header>
        <Modal.Body>
          <Modal.Body.Heading>Panier</Modal.Body.Heading>
          {commande.panier.menus.map((menu) => (
            <p key={commande.id.toString() + menu.id.toString()}>
              {menu.quantite} {menu.menu.nom}
            </p>
          ))}
          {commande.panier.produits.map((produit) => (
            <p key={commande.id.toString() + produit.id.toString()}>
              {produit.quantite} {produit.produit.nom}
            </p>
          ))}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </TableRow>
  );
};

export default HistoriqueTableRow;

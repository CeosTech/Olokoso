import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HistoriqueTableRow from "./HistoriqueTableRow";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "3rem auto",
    maxWidth: 1200,
  },

  heading: {
    fontWeight: "bold",
  },

  rowConfig: {
    borderWidth: 3,
  },
});

export default function HistoriqueTable({ commandes }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow className={classes.rowConfig}>
            <TableCell className={classes.heading}>Date</TableCell>
            <TableCell className={classes.heading} align='center'>
              Heure
            </TableCell>
            <TableCell className={classes.heading} align='center'>
              Client
            </TableCell>
            <TableCell className={classes.heading} align='center'>
              Méthode de vente
            </TableCell>
            <TableCell className={classes.heading} align='center'>
              Montant
            </TableCell>
          </TableRow>
        </TableHead>
        {commandes?.map((commande) => (
          <HistoriqueTableRow key={commande.id} commande={commande} />
        ))}
      </Table>
    </TableContainer>
  );
}

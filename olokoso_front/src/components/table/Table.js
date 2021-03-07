import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SwitchBtn from "../switch/SwitchBtn";
import { TableBody } from "@material-ui/core";
const useStyles = makeStyles({
  heading: {
    fontWeight: "bold",
  },

  rowConfig: {
    borderWidth: 3,
  },
});

export default function TableBox({ proprietes, donnees }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow className={classes.rowConfig}>
            {proprietes.map((prop) => (
              <TableCell key={prop} className={classes.heading} align='center'>
                {prop}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {donnees?.map((produit) => (
            <TableBox.Row key={produit.id} item={produit} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TableBox.Row = ({ item }) => {
  return (
    <TableRow>
      <TableCell align='center'>{item.nom}</TableCell>
      <TableCell align='center'>{item.categories?.[0]?.libelle}</TableCell>
      <TableCell align='center'>
        <SwitchBtn default_val={item.disponibilite} />
      </TableCell>
    </TableRow>
  );
};

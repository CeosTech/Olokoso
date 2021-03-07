import { IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
const useStyles = makeStyles((theme) => ({
  expanIcon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
  },
}));
const ExpandedIcon = ({ expanded, setExpanded }) => {
  const classes = useStyles();

  return (
    <IconButton
      className={"nouvelleCommande__expandIcon " + classes.expanIcon}
      onClick={() => setExpanded(!expanded)}>
      {expanded ? (
        <ExpandLessIcon style={{ color: "black" }} />
      ) : (
        <ExpandMoreIcon style={{ color: "black" }} />
      )}
    </IconButton>
  );
};

export default ExpandedIcon;

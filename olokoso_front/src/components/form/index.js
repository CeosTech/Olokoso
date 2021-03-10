import React, { useState } from "react";
// import emailjs from "emailjs-com";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import "./form.css";
import useForm from "../../hooks/useForm";

// import { db, timestamp } from "../../config/firebase";
import ModalBootsrap from "../modal/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  margin: {
    margin: theme.spacing(1.8, 0),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },

  buttonIcon: {
    paddingLeft: 1,
  },

  border: {
    "& label.Mui-focused": {
      color: "#ccc",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ccc",
    },

    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#ccc",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ccc",
      },
    },
  },
}));

const initial = {
  nom: "",
  prenom: "",
  email: "",
  nomSociete: "",
  numTel: "",
  message: "",
  prestation: "",
};

const ContactForm = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const estValide = (fieldValues = state) => {
    const validator = {};
    if ("nom" in fieldValues)
      validator.nom = state.nom ? null : "Le champ nom est obligatore";

    if ("prenom" in fieldValues)
      validator.prenom = state.prenom ? null : "Le champ prenom est obligatore";
      
    if ("prestation" in fieldValues)
    validator.prestation = state.prestation ? null : "Choisissez une prestation";
  

    if ("message" in fieldValues)
      validator.message =
        message.length > 10
          ? null
          : "le champ message doit avoir au moins 10 caractères";

    if ("email" in fieldValues)
      validator.email = /([a-zA-Z0-9-_.+]{4,})@.+\..+/.test(email)
        ? null
        : "Le mail n'est pas valide";

    if ("numTel" in fieldValues)
      validator.numTel = /(?:(\+(\d{1,2})?)[ -]?)?\(?(?<first>\d{3})\)?[-\s]?(\d{3})[- ]?(\d{4})/.test(
        numTel
      )
        ? null
        : "Le numéro de téléphone n'est pas valide";

    setErrors({ ...validator });

    // retourne boolean si et seulement si on passe un parametre pour la fonction
    if (fieldValues === state) {
      return Object.values(validator).every((el) => !el);
    }
  };

  const {
    state,
    handleInputChange,
    errors,
    setErrors,
    reinitialiserState,
  } = useForm(initial, estValide);

  const { nom, prenom, email, nomSociete, numTel, message, prestation } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (estValide()) {
      // db.collection("contact").add({
      //   ...state,
      //   createdAt: timestamp(),
      // });

      // // Envoyer email
      // emailjs
      //   .sendForm(
      //     "service_6127e6c",
      //     "template_xlbstkg",
      //     e.target,
      //     "user_kgB4die8lZG1EnOhBisaS"
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );

      reinitialiserState();

      handleShow();
    }
  };

  return (
    <div className="form__container">
      <h3>Formulaire de contact</h3>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <FormControl fullWidth className={`${classes.margin} ${classes.border} `}>
          <InputLabel>Nom *</InputLabel>
          <Input value={nom} name='nom' onChange={handleInputChange} required />
        </FormControl>
        <div className='error'>{errors.nom}</div>

        <FormControl fullWidth className={`${classes.margin} ${classes.border} `}>
          <InputLabel>Prénom *</InputLabel>
          <Input value={prenom} name='prenom' onChange={handleInputChange} required />
        </FormControl>
        <div className='error'>{errors.prenom}</div>

        {/* <TextField
          name='name'
          variant='outlined'
          label='Full Name'
          // error={false}
          // helperText={errors.names}
          {...(errors.name && { helperText: errors.name, error: true })}
        /> */}
        
        <FormControl fullWidth className={`${classes.margin} ${classes.border} `}>
          <InputLabel>Société / Etablissement (facultatif)</InputLabel>
          <Input
            value={nomSociete}
            name='nomSociete'
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl fullWidth className={`${classes.margin} ${classes.border} `}>
          <InputLabel>Votre mail *</InputLabel>
          <Input
            type='email'
            name='email'
            onChange={handleInputChange}
            value={email}
            required
          />
        </FormControl>
        <div className='error'>{errors.email}</div>

        <FormControl fullWidth className={`${classes.margin} ${classes.border} `}>
          <InputLabel>Téléphone *</InputLabel>
          <Input
            value={numTel}
            name='numTel'
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <div className='error'>{errors.numTel}</div>

        <FormControl fullWidth className={`${classes.margin} ${classes.border} `}>          
          <InputLabel>Prestation *</InputLabel>
          <Select
            type='prestation'
            name='prestation'
            onChange={handleInputChange}
            value={prestation}
            required
          >
            <MenuItem value='Brunch'>Brunch</MenuItem>
            <MenuItem value='Traiteur'>Traiteur</MenuItem>
            <MenuItem value='Autre'>Autre (précisez votre demande dans le message ci-dessous)</MenuItem>
          </Select>
        </FormControl>
        <div className='error'>{errors.prestation}</div>

        <TextField
          fullWidth
          className={`${classes.margin} ${classes.border} `}
          id='outlined-multiline-static'
          label='Message'
          multiline
          rows={5}
          name='message'
          value={message}
          onChange={handleInputChange}
          variant='outlined'
        />
        <div className='error'>{errors.message}</div>

        <Button
          type='submit'
          variant='contained'
          color='primary'
          className='submit'
          endIcon={<SendIcon />}>
          Envoyer
        </Button>

        <ModalBootsrap
          handleClose={handleClose}
          show={show}
          title={
            <>
              Envoyé
              <i
                className='fas fa-thumbs-up'
                style={{ color: "#4caf50", marginLeft: "1rem" }}></i>
            </>
          }>
          Votre message a bien été envoyé , Vous serez très rapidement contacté.
        </ModalBootsrap>
      </form>
    </div>
  );
};

export default ContactForm;

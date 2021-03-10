import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import './styles.css';

const RadioButtonsGroup = () => {
const history = useHistory();

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(value);
    if (value !== '') {
        history.push("/paiement")
        setError(false)
    }
    else {
        setError(true)
    }
  }
  return (
    
    <div className="panier__fieldset">

        <RadioGroup aria-label="panier__choice-delivery" name="panier__choice-delivery" value={value} onChange={handleChange}>
            <FormControlLabel className="radio__panier-choice" value="take-away--choice" control={<Radio />} label="A emporter" />
            <FormControlLabel value="delivery-choice" className="radio__panier-choice" control={<Radio />} label="Livraison" />
        </RadioGroup>

        
        {error && (
            <p className="delivery__error-message">Veuillez choisir un mode de livraison</p>
        )}

        <Button
            onClick={handleSubmit}
            type='submit'
            variant='contained'
            color='primary'
            className='panier__container--btn-valider'>
            Valider Mon Panier
        </Button>

    </div>

    
    
  );
}

export default RadioButtonsGroup;
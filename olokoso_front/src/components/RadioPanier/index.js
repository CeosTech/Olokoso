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

  // Will redirect to the payment and add in the props the kind of delivery chosen
  const handleSubmit = () => {
    console.log(value);
    if (value !== '') {
        history.push({
          pathname: '/paiement',
          delivery: {value},
      });
        setError(false)
    }
    else {
        setError(true)
    }
  }
  return (
    
    <div className="panier__fieldset">

        <RadioGroup aria-label="panier__choice-delivery" name="panier__choice-delivery" value={value} onChange={handleChange}>
            <FormControlLabel className="radio__panier-choice" value="à emporter" control={<Radio />} label="A emporter" />
            <FormControlLabel value="livraison" className="radio__panier-choice" control={<Radio />} label="Livraison" />
        </RadioGroup>

        
        {error && (
            <p className="error error_cart">Veuillez choisir un mode de livraison</p>
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
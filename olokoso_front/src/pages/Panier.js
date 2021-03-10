import "./panier.css";
import { useSelector } from "react-redux";
import { selectBaskets } from "../app/Redux-slices/basketsSlice";
import Empty from "../images/empty.svg";
import Product from "../components/product/Product";
import { calculTotal, getNombresArticles } from "../utilities";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Panier = () => {
  const history = useHistory();
  const baskets = useSelector(selectBaskets);

  return (
    <div className='panier'>
      {!baskets.length ? (
        <div className='panier__vide'> 

          <button 
            onClick={history.goBack}
            className="go-back">
              Retour
          </button>

          <h1>Votre panier est vide</h1>
          <img src={Empty} alt='empty basket' />
        </div>
      ) : (
        <div className='panier__container'>
        
          <button 
            onClick={history.goBack}
            className="go-back">
              Retour
          </button>

          <h1>Détail du panier</h1>
          <p className="panier__nombre-articles">
            {getNombresArticles(baskets)} article
            {getNombresArticles(baskets) > 1 && "s"}
          </p>
          {baskets.map((product) => {
            return <Product key={product.nom} {...product} />;
          })}

          <div className='panier__container--prix'>
            <h1>Prix Total (TTC)</h1>
            <p>{calculTotal(baskets)} €</p>
          </div>

          <div className='panier__choice-delivery'>
            <input type="radio" id="delivery__1" name="delivery-1" value="Emporter"/>
            <label for="delivery__1">A emporter</label>

            <input type="radio" id="delivery__2" name="delivery-2" value="Livraison"/>
            <label for="delivery__2">Livraison</label>
          </div>

          <Button
            onClick={() => history.push("/paiement")}
            type='submit'
            variant='contained'
            color='primary'
            className='panier__container--btn-valider'>
              Valider Mon Panier
          </Button>
          
        </div>
      )}
    </div>
  );
};

export default Panier;

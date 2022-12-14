import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './stateProvider';
import { getBasketTotal } from './reducer';
function Subtotal() {
  const navigate = useNavigate()
  const [{basket}, dispatch] = useStateValue()
  return (
    <div className='subtotal'>
       <CurrencyFormat
         renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className='subtotal__gift'>
                <input type="checkbox" /> This Order
                contains a gift
              </small>
            </>
         )} 
         decimalScale={2}
         value={getBasketTotal(basket)}
         displayType={"text"}
         thousandSeparator={true}
         prefix={"$"}
       />
       <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal
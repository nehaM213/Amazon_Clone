import React, { useState } from 'react';
import '../styles/Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../contexts/StateProvider';
import { getBasketTotal } from '../contexts/reducer';
function Subtotal() {
    const [{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value)=>(
            <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2} // will show the total amt at 2 decimal places
        value={getBasketTotal(basket)} // amount
        displayType={"text"}
        thousandSeparator={true}// , 4,500 
        prefix={'\u20B9'}// currency
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
import React from 'react'
import '../styles/CheckoutProduct.css'
import { useStateValue } from '../contexts/StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {
  const[{basket},dispatch]=useStateValue();
  const removeFromBasket=()=>{
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id,
    })
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>&#8377;</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {/* here we are making an array of 5 and filling it and map through it, _ -> is used when u dont know what will be the first value */}
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct
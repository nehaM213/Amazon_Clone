import React from 'react'
import { useStateValue } from '../contexts/StateProvider';
import '../styles/Product.css';

function Product({id,title,image,price,rating}) {
    // state: {basket} destructuring
    const [{basket},dispatch]=useStateValue();
    console.log("basket is here=",basket);
  const addToBasket=()=>{
    dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
        },
    });
  };
  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>&#8377;</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img src={image} alt=""></img>
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
import React from "react";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../contexts/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.displayName}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map(item=>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}>
            </CheckoutProduct>
          ))}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

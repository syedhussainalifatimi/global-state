import React from "react";
import Styles from './cart.module.css';
import CoustomButton from "../button/coustombutton";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/cart-reducer/cartSlice";

const Cart = () => {
  const cartItems = useSelector(state => state.cartItems.cartItems);
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch(removeItem(product)); // Pass the product to removeItem action
  };

  return (
    <>
      <h1>Cart-Items</h1>
      <div className={Styles.showcasecontainer} >
        {cartItems.map(product => (
          <div key={product.id} className={Styles.items}>
            <img src={product.imageUrl} alt={product.name} className={Styles.img} />
            <h5>{product.name}</h5>
            <div className={Styles.pricecart}>
              <p>Price: ${product.price}</p>
              <CoustomButton onClick={() => handleClick(product)}>Remove</CoustomButton>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart;
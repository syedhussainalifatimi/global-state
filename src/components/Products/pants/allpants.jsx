import React from 'react';
import Styles from './pants.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../../redux/cart-reducer/cartSlice';


const AllPants = () => {
  const pantsCollection = useSelector(state => state.pants.pants);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Pants-Collection</h1>
      <div className={Styles.showcasecontainer}>
        {pantsCollection.map(product => (
          <div key={product.id} className={Styles.items}>
            <img src={product.imageUrl} alt={product.name} className={Styles.img} />
            <h5>{product.name}</h5>
            <div className={Styles.pricecart}>
              <p>Price: ${product.price}</p>
              <button onClick={() => dispatch(addItem(product))}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>


    </>
  );
}

export default AllPants;
import React from 'react';
import Styles from './pants.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../../redux/cart-reducer/cartSlice';
import { Link } from 'react-router-dom';

const Pants = () => {
  const pantsCollection = useSelector(state => state.pants.pants);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Pants-Collection</h1>
      <div className={Styles.showcasecontainer}>
        {pantsCollection.slice(0, 3).map(product => (
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
      <div className={Styles.moreitems}>
        <Link to="/pants"><h5>View More .......</h5></Link>
      </div>

    </>
  );
}

export default Pants;
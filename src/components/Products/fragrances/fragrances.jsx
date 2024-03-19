import React from 'react';
import Styles from './fragrances.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../../redux/cart-reducer/cartSlice';

const Fragrance = () => {
  const fragranceItems = useSelector(state => state.fragrance.fragrance);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Fragrances-Collection</h1>
      <div className={Styles.showcasecontainer}>
        {fragranceItems.slice(0, 3).map(product => (
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
        <Link to="/fragrances"><h5>View More .......</h5></Link>
      </div>
    </>
  );
}

export default Fragrance;
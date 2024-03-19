import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "../../redux/signIn-reducer/signInSlice";
import Styles from './navbar.module.css';

const Navbar = () => {
  const signInInfo = useSelector(state => state.signIn.signIn[0]); // Accessing the first element of the signIn array
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems.cartItems);

  const handleClick = () => {
    dispatch(signOutUser()); // Dispatching the signOutUser action directly
  };

  return (
    <>
      <div className={Styles.navbar}>
        <div>
          <Link to="/">
            <img src="https://static.vecteezy.com/system/resources/previews/013/156/124/original/shopping-cart-logo-design-shopping-logo-design-on-line-shopping-app-icon-free-vector.jpg" alt="logo" className={Styles.navimg} />
          </Link>
        </div>
        <div className={Styles.navitems}>
          <Link to="/products" className={Styles.link}>
            Products
          </Link>
          <Link to="/contact" className={Styles.link}>
            Contact
          </Link>
          <Link to="/cart" className={Styles.link}>
            Cart
            <span>{cartItems.length}</span>
          </Link>
          {signInInfo.isSignInWithGoogle ? (
            <Link to="/" className={Styles.link} onClick={handleClick}>
              Sign Out
            </Link>
          ) : (
            <>
              <Link to="/signup" className={Styles.link} >
                SignUp
              </Link>
              <Link to="/signin" className={Styles.link} >
                SignIn
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from './navbar.module.css'


const Navbar = () => {
  const [isSignInWithGoogle, setIsSignInWithGoogle] = useState(false);

  const handleClick = () => {
    setIsSignInWithGoogle(prevState => !prevState);
  }
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
          </Link>
          <Link to="/" className={Styles.link} onClick={handleClick}>
            {isSignInWithGoogle ? 'Sign Out' : 'Sign In with Google'}
          </Link>
        </div>
      </div>
    </>
  )
}
export default Navbar;
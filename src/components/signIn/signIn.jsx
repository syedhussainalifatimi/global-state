import React from "react";
import { useState, useEffect } from "react";
import Styles from "./signIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/signIn-reducer/signInSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const usersInfo = useSelector(state => state.usersInfo.usersInfo);
  const handleClick = () => {
    dispatch(signInUser())
  };

  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = usersInfo.find(user => user.email === signInInfo.email && user.password === signInInfo.password);
    if (foundUser) {
      dispatch(signInUser());
    } else {
      alert('Wrong email or password');
    }
    setSignInInfo({
      email: '',
      password: '',
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setSignInInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    // Effect hook to watch for changes in userInfo state
  }, [signInInfo]);

  return (
    <div className={Styles.signupdiv}>
      <div className={Styles.welcomediv}>
        <h3>Welcome To Family of Ultimate Shopping Solution</h3>
        <h5>We Really Cared About Our Loyal Customers</h5>
      </div>
      <div className={Styles.formdiv}>
        <h4>Sign In With e-mail and Password</h4>
        <form className={Styles.inputinfo} onSubmit={handleSubmit}>
          <input
            className={Styles.inputfield}
            type='email'
            name='email'
            value={signInInfo.email}
            onChange={handleChange}
            placeholder='Email'
            required
          />
          <input
            className={Styles.inputfield}
            type='password'
            name='password'
            value={signInInfo.password}
            onChange={handleChange}
            placeholder='Password'
            required
          />
          <button className={Styles.btn} type='submit'>Sign In</button>
        </form>
        <button className={Styles.signinwgoogle} onClick={handleClick}>SignIn with Google</button>
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";
import { useState, useEffect } from "react";
import Styles from "./signUp.module.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/user-reducer/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInfo.password === userInfo.confirmPassword) {
      // Passwords match, proceed with sign up
      dispatch(addUser(userInfo));
      console.log(userInfo);
      setUserInfo({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      // Passwords do not match, show an alert
      alert("Passwords do not match");
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  useEffect(() => {
    // Effect hook to watch for changes in userInfo state
  }, [userInfo]);

  return (
    <div className={Styles.signupdiv}>
      <div className={Styles.welcomediv}>
        <h3>Welcome To Family of Ultimate Shopping Solution</h3>
        <h5>We Really Cared About Our Loyal Customers</h5>
      </div>
      <div className={Styles.formdiv}>
        <h4>SignUp A New Account</h4>
        <form className={Styles.inputinfo} onSubmit={handleSubmit}>
          <input
            className={Styles.inputfield}
            type='text'
            name='displayName'
            value={userInfo.displayName}
            onChange={handleChange}
            placeholder='Display Name'
            required
          />
          <input
            className={Styles.inputfield}
            type='email'
            name='email'
            value={userInfo.email}
            onChange={handleChange}
            placeholder='Email'
            required
          />
          <input
            className={Styles.inputfield}
            type='password'
            name='password'
            value={userInfo.password}
            onChange={handleChange}
            placeholder='Password'
            required
          />
          <input
            className={Styles.inputfield}
            type='password'
            name='confirmPassword'
            value={userInfo.confirmPassword}
            onChange={handleChange}
            placeholder='Confirm Password'
            required
          />
          <button className={Styles.btn} type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
import React from 'react';
import Input from '../input/input';
import { useState } from 'react';
import CoustomButton from '../button/coustombutton';
import Styles from './contact.module.css'


function Contact() {
  //const textarea = true;
  const [message, setMessage] = useState(""); // State to hold the message

  // Function to handle input change
  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(message) // Update the message state with the input value
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(message); // Log the message to the console (you can handle form submission logic here)
    setMessage("");
  }



  return (
    <>
      <div className={Styles.messagediv}>
        <form onSubmit={handleSubmit}> {/* Wrap the inputs in a form for submission */}
          <Input textarea={true} handleChange={handleChange} value={message}>
            Share Your Thoughts With Us....
          </Input>
          <div>
            <CoustomButton type='submit'>Send</CoustomButton>
          </div>
        </form>
      </div>
      <div className={Styles.contactdiv}>
        <div className={Styles.details}>
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us with any questions or concerns:</p>
          <ul>
            <li>Email: fatim.aw609@gmail.com</li>
            <li>Phone: +92 (348) 559-0407</li>
            <li>Address: 7/37 B-1 Area, Liquatabad Karachi, Pakistan</li>
          </ul>
        </div>
        <div className={Styles.map}>
          <iframe
            title="Google Map"
            width="500"
            height="500"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3618.989108302958!2d67.04489647673083!3d24.898353143737793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUzJzUzLjQiTiA2N8KwMDMnMDIuNiJF!5e0!3m2!1sen!2s!4v1709303698805!5m2!1sen!2s"
          ></iframe>

        </div>
      </div>
    </>
  );
}

export default Contact;

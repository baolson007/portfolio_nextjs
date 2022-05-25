import { useState, useRef } from "react";
import validator from "validator";
import Card from "./ui/Card";

import classes from "./ContactForm.module.css";

function Contact(props) {
  const [emailValid, setEmailIsValid] = useState(true);
  const nameInputRef = useRef();
  const messageInputRef = useRef();
  const emailInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredData = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      message: messageInputRef.current.value,
    };

    if (validator.isEmail(enteredData.email)) {
      setEmailIsValid(true);
      props.onContactMe(enteredData);
    } else {
      setEmailIsValid(false);
    }
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" required id="name" ref={nameInputRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" ref={emailInputRef} />
        {!emailValid && (
          <p className={classes.invalid}>please enter valid email</p>
        )}
      </div>

      <div className={classes.control}>
        <label htmlFor="message">Drop me a line below!</label>
        <textarea id="message" required rows="5" ref={messageInputRef} />
      </div>

      <div className={classes.actions}>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Contact;

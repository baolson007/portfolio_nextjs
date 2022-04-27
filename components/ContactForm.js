import { useRef } from "react";
import Card from "./ui/Card";

import classes from "./ContactForm.module.css";

function Contact(props) {
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

    props.onContactMe(enteredData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Drop me a line below!</label>
          <textarea id="message" required rows="5" ref={messageInputRef} />
        </div>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default Contact;

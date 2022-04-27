import { useRef } from "react";
import Card from "./ui/Card";
import classes from "./ContactForm.module.css";

function Contact() {
  const titleInputRef = useRef();
  const messageInputRef = useRef();
  const emailInputRef = useRef();

  const submitHandler = (event) => {
    console.log(event);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="title" ref={titleInputRef} />
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

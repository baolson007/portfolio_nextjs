import classes from "./Button.module.css";

function Button(props) {
  //const classes = `classes.button ${props.style}`;
  return (
    <button
      type={props.type}
      className={classes.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;

import classes from "./Project.module.css";
import Card from "./ui/Card";

function Project(props) {
  const icon = props.image;
  return (
    <Card className={classes.project}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div>{props.image && props.image}</div>
      <span>
        {props.link && (
          <button>
            <a href={props.link}>See it live</a>
          </button>
        )}
      </span>
      <span className={classes.git}>
        <button id="git">
          <a href={props.git}> &lt; Source code /&gt;</a>
        </button>
      </span>
    </Card>
  );
}

export default Project;

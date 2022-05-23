import { Fragment } from "react";
import classes from "./Project.module.css";
import Link from "next/link";
import Card from "./ui/Card";

function Project(props) {
  return (
    <Card className={classes.project}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <button>
        <a href={props.link}>{props.name}</a>
      </button>
    </Card>
  );
}

export default Project;

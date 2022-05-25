import { Fragment } from "react";
import classes from "./Project.module.css";
import Link from "next/link";
import Card from "./ui/Card";
import Button from "./ui/Button";

function Project(props) {
  return (
    <Card className={classes.project}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <Button>
        <a href={props.link}>See it live</a>
      </Button>
    </Card>
  );
}

export default Project;

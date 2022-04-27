import { Fragment } from "react";
import classes from "./AboutMe.module.css";
function AboutMe() {
  return (
    <Fragment>
      <h1>ABOUT ME COMING SOON</h1>
      <p>brief background</p>
      <p>photos?</p>
      <p>include skills section</p>
      <p>
        Be sure to checkout my{" "}
        <a className={classes.projectLink} href="/Projects">
          Projects
        </a>
      </p>
    </Fragment>
  );
}

export default AboutMe;

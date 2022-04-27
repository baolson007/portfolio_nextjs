import { Fragment } from "react";
import classes from "./AboutMe.module.css";
import Link from "next/link";
import Card from "./ui/Card";

function AboutMe() {
  return (
    <Fragment>
      <h1>ABOUT ME COMING SOON</h1>
      <p>brief background</p>
      <p>photos?</p>
      <p>include skills section</p>
      <Card className={classes.projectLink}>
        <Link href="/Projects">Be sure to checkout my Projects</Link>
      </Card>
    </Fragment>
  );
}

export default AboutMe;

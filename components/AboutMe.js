import { Fragment } from "react";
import classes from "./AboutMe.module.css";
import Link from "next/link";
import Card from "./ui/Card";

function AboutMe() {
  return (
    <Fragment>
      <h2> Hello, I&apos;m Ben.</h2>
      <h2>I&apos;m a full stack web developer.</h2>

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

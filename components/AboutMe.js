import { Fragment } from "react";
import classes from "./AboutMe.module.css";
import Link from "next/link";
import Card from "./ui/Card";

function AboutMe() {
  return (
    <Fragment>
      <h2>hello, my name is ben.</h2>
      <h2>
        i&apos;m a science guy turned
        <span id="word" className={classes.word}>
          &nbsp;developer
        </span>
      </h2>

      <h2>welcome to my portfolio</h2>
      <p></p>

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

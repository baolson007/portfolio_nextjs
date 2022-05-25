import { Fragment } from "react";
import classes from "./AboutMe.module.css";
import Link from "next/link";
import Image from "next/image";
import Card from "./ui/Card";

{
  /* <p>Some more info about me: </p>

<p>brief background</p>
<p>photos?</p>
<p>include skills section</p>
<Card className={classes.projectLink}>
  <Link href="/Projects">Be sure to checkout my Projects</Link>
</Card> */
}
function AboutMe() {
  return (
    <Fragment>
      <div className={classes.title}>
        <h1>Hi, I&apos;m Ben</h1>
        <h2>
          I&apos;m a science guy turned
          <span id="word" className={classes.word}>
            &nbsp;developer.
          </span>
        </h2>
        <h2>Welcome to my portfolio.</h2>
      </div>
    </Fragment>
  );
}

export default AboutMe;

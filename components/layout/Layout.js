import classes from "./Layout.module.css";
import Navbar from "./Navbar";
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <Navbar></Navbar>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
}

export default Layout;

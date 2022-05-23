import Link from "next/link";
import Image from "next/image";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Ben Olson</div>
      <nav>
        <ul>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Projects">Projects</Link>
          </li>
          <li>
            <Link href="/Resume">Resume</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/benjaminolson1/">
              <a>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  alt="LinkedIn logo"
                  width="30"
                  height="30"
                />
              </a>
            </Link>
          </li>

          <li>
            <Link href="https://github.com/baolson007">
              <a>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="Github logo"
                  width="30"
                  height="30"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

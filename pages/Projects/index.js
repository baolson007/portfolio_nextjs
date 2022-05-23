import Project from "../../components/Project";
import { descriptions } from "../../public/ProjectDescriptions";
import classes from "./Projects.module.css";

const cryptoDescription = descriptions.CRYPTO_DESCRIPTION;
const houseBuddyDescription = descriptions.HOUSEBUDDY_DESCRIPTION;

function Projects() {
  return (
    <ul className={classes.projects}>
      <li>
        <Project
          name="CryptoTracker"
          image=""
          description={cryptoDescription}
          link="https://react-http-93208.web.app/"
        />
      </li>
      <li>
        <Project
          name="HouseBuddy"
          image=""
          description={houseBuddyDescription}
          link="https://benolson.pythonanywhere.com/"
        />
      </li>
      <li>
        <p> more projects go here </p>
      </li>
    </ul>
  );
}

export default Projects;

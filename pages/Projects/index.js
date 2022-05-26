import Project from "../../components/Project";
import { descriptions } from "../../public/ProjectDescriptions";
import classes from "./Projects.module.css";
import Image from "next/image";
import { FaReact, FaFlask } from "react-icons/fa";

const cryptoDescription = descriptions.CRYPTO_DESCRIPTION;
const houseBuddyDescription = descriptions.HOUSEBUDDY_DESCRIPTION;
const passwordGeneratorDescription = descriptions.PASSWORD_DESCRIPTION;
const portfolioDescription = descriptions.PORTFOLIO_DESCRIPTION;

function Projects() {
  return (
    <ul className={classes.projects}>
      <li>
        <Project
          name="CryptoTracker"
          image={
            <Image
              layout="intrinsic"
              width="600"
              height="300"
              src="/CryptoDemo.png"
              alt="Crypto"
            />
          }
          description={cryptoDescription}
          link="https://react-http-93208.web.app/"
          git="https://github.com/baolson007/crypto_dashboard"
        />
      </li>
      <li>
        <Project
          name="HouseBuddy"
          image={
            <Image
              layout="intrinsic"
              width="600"
              height="400"
              src="/HousebuddyDemo.png"
              alt="Housebuddy"
            />
          }
          description={houseBuddyDescription}
          link="https://benolson.pythonanywhere.com/"
          git="https://github.com/baolson007/HouseBuddy"
        />
      </li>
      <li>
        <Project
          name="Nautical Password Generator"
          image={
            <Image
              layout="intrinsic"
              width="500"
              height="300"
              src="/pwordGen.png"
              alt="passwordGenerator"
            />
          }
          description={passwordGeneratorDescription}
          git="https://github.com/baolson007/PasswordGenerator_ReactFlask/tree/master/src"
        />
      </li>
      <li>
        <Project
          name="Portfolio"
          image={
            <Image
              layout="intrinsic"
              width="400"
              height="300"
              src="/nextlogo.png"
              alt="nextLogo"
            />
          }
          description={portfolioDescription}
          git="https://github.com/baolson007/portfolio_nextjs"
        />
      </li>
    </ul>
  );
}

export default Projects;

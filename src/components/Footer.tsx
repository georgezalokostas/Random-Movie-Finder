import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <a href="https://github.com/georgezalokostas/Random-Movie-Finder" target="_blank" rel="noopener noreferrer" className="footer">
      <span>Source Code:</span>
      <FontAwesomeIcon icon={faGithub} size="lg" />
    </a>
  );
}

export default Footer;

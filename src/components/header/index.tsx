import { ROUTES } from 'src/constants/routes';
import 'src/components/header/style.css';

function Header() {
  return (
    <div className="header-container">
      <header>
        <nav>
          <a href={ROUTES.HOME}>Home</a>
          <a href={ROUTES.ABOUT_ME}>About Me</a>
          <a href={ROUTES.PROJECTS}>Projects</a>
          <a href={ROUTES.CONTACT}>Contact</a>
        </nav>
      </header>
      <img
        className="header-img"
        src="images/img-header/blood.png"
        alt="Image of a line of blood drops dripping from top to bottom on a black background, with an irregular border and thick droplets, representing a dramatic visual effect."
      />
    </div>
  );
}

export default Header;

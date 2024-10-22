import { ROUTES } from 'src/constants/routes';
import 'src/components/header/style.css';

function Header() {
  return (
    <div>
      <header>
        <a href={ROUTES.HOME}>Home</a>
        <a href={ROUTES.ABOUT_ME}>About Me</a>
        <a href={ROUTES.PROJECTS}>Projects</a>
        <a href={ROUTES.CONTACT}>Contact</a>
      </header>
    </div>
  );
}

export default Header;

import { Link } from 'react-router-dom';
import './style.css';
import { PAGES } from '../../constants';

export default function Header() {
  return (
    <nav className='navigation-menu'>
      <Link to={PAGES.HOME} className='header-buttons'>
        Home
      </Link>
      <Link to={PAGES.ABOUT} className='header-buttons'>
        About Me
      </Link>
      <Link to={PAGES.PROJECTS} className='header-buttons'>
        Projects
      </Link>
      <Link to={PAGES.CONTACT} className='header-buttons'>
        Contact
      </Link>
    </nav>
  );
}

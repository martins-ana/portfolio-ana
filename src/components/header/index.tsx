import { Link } from 'react-router-dom';
import './style.css';
import { PAGES } from '../../constants';

export default function Header() {
  return (
    <nav className='navigation-menu'>
      <Link to={PAGES.HOME}>Home</Link>
      <Link to={PAGES.ABOUT}>About Me</Link>
      <Link to={PAGES.PROJECTS}>Projects</Link>
      <Link to={PAGES.CONTACT}>Contact</Link>
    </nav>
  );
}

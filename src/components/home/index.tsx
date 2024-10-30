import { Link } from 'react-router-dom';
import { PAGES } from '../../constants';
import './style.css';

export default function HomeInitial() {
  return (
    <section>
      <div className='home-initial-presentation'>
        <img
          className='home-initial-portrait'
          src='/images/ana-destaque.png'
          alt='Portrait of a young woman with long dark hair, smiling softly with one hand resting on her chin. The image has an irregular white outline on a transparent background, highlighting the womans face.'
        />
        <div className='home-initial-card-description'>
          <h1 className='home-initial-title'>Hi, I am</h1>
          <h2 className='home-initial-subtitle'>Ana Paula!</h2>
          <h2 className='home-initial-subtitle-2'>Front-end Developer</h2>
          <p className='home-initial-description'>
            I am passionate about creating modern and authentic websites that not only
            attract visually but also provide unique, easy, and intuitive experiences.
          </p>
        </div>
      </div>
      <div>
        <Link to=''>Download CV</Link>
        <Link to={PAGES.CONTACT}>Get in Touch!</Link>
      </div>
      <div>
        <Link to=''>Download CV</Link>
        <Link to=''>Get in Touch!</Link>
        <Link to=''>Get in Touch!</Link>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import './style.css';

export default function MenuSocialMedias() {
  return (
    <div className='home-social-medias'>
      <Link
        className='buttons-social-medias'
        to='mailto:martinsgarciaana@outlook.com'
        target='_blank'
        rel='noreferrer noopener'
      >
        <EnvelopeSimple size={24} />
      </Link>
      <Link
        className='buttons-social-medias'
        to='https://github.com/martins-ana'
        target='_blank'
        rel='noreferrer noopener'
      >
        <GithubLogo size={24} />
      </Link>
      <Link
        className='buttons-social-medias'
        to='https://www.linkedin.com/in/ana-paulamartins/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <LinkedinLogo size={24} />
      </Link>
    </div>
  );
}

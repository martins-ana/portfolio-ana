import Header from 'src/components/header';
import HomeInitial from 'src/components/home';
import MenuSocialMedias from 'src/components/menu-social-medias';
import './style.css';

export default function Home() {
  return (
    <main className='global-main'>
      <Header />
      <HomeInitial />
      <MenuSocialMedias />
    </main>
  );
}

import Header from '../../components/header';
import './style.css';
import HomeInitial from '../../components/home';
import MenuSocialMedias from '../../components/menu-social-medias';

export default function Home() {
  return (
    <main className='home-main'>
      <Header />
      <HomeInitial />
      <MenuSocialMedias />
    </main>
  );
}

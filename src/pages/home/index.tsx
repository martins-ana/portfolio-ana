import Header from '../../components/header';
import './style.css';
import HomeInitial from '../../components/home';

export default function Home() {
  return (
    <main className='home-main'>
      <Header />
      <HomeInitial />
    </main>
  );
}

import Header from 'src/components/header';
import Home_Initial from 'src/components/home-initial';
import 'src/pages/home/style.css';

function Home() {
  return (
    <div className="home-container">
      <Header></Header>
      <Home_Initial></Home_Initial>
    </div>
  );
}

export default Home;

import Header from 'src/components/header';
import './style.css';
import MenuSocialMedias from 'src/components/menu-social-medias';

export default function AboutMe() {
  return (
    <main className='global-main'>
      <Header />
      <div className='description-about-me'>
        <div className='text-description-about-me'>
          <h1 className='title-about-me'>Olá!</h1>
          <p className='paragraph-about-me'>
            Sou a Ana Paula Garcia Martins, estudante de Análise e Desenvolvimento de
            Sistemas com um background em Técnico em Administração.
          </p>
          <p className='paragraph-about-me'>
            Apaixonada por tecnologia e inovação, estou me especializando em
            desenvolvimento front-end, com o objetivo de criar interfaces intuitivas e
            acessíveis.{' '}
          </p>
          <p className='paragraph-about-me'>
            Sou curiosa e dedicada, sempre buscando expandir meus conhecimentos em design
            de interfaces e automação. Atualmente, estou desenvolvendo projetos que unem
            funcionalidade e usabilidade.
          </p>
          <p className='paragraph-about-me'>
            Além disso, adoro explorar o mundo dos livros, séries e animes e me aventurar
            em novas receitas.
          </p>
        </div>
        <img
          className='illustration-about-me'
          src='/images/illustration-about-me.png'
          alt='3D illustration of multiple stylized programming windows layered on top of each other, featuring code symbols like curly braces, hashtags, and HTML tags. The windows are in pastel tones of pink, blue, and black, representing a software development theme.'
        />
      </div>
      <MenuSocialMedias />
    </main>
  );
}

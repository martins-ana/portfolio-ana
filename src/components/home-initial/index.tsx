import 'src/components/home-initial/style.css';

function Home_Initial() {
  return (
    <section className="section-home-initial">
      <img
        className="img-highlight-and-presentation"
        src="images/img-home-initial/ana-destaque-um.png"
        alt="Portrait of a young woman with long, dark hair, smiling softly, with one hand resting on her chin. The image has a light beige background and an organic shape with irregular edges."
      />
      <div className="presentation-card">
        <img
          className="img-hook"
          src="images/img-home-initial/gancho.png"
          alt="Image of a metal hook with a sharp tip, wrapped in dirty bandages stained with blood. The hook is dripping blood and has a fly perched on it, creating a dark and macabre look."
        />
        <h2 className="greetings-highlight-and-presentation">Hi! I am</h2>
        <h1 className="name-highlight-and-presentation">Ana Paula</h1>
        <h2 className="profession-highlight-and-presentation">Front-end Developer</h2>
        <p className="paragraph-highlight-and-presentation">
          I am passionate about creating modern and authentic websites that not only attract visually but also
          <br />
          provide
          <br />
          unique, easy, and intuitive experiences.
        </p>
      </div>
    </section>
  );
}

export default Home_Initial;

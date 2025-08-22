import "./App.css";

function App() {
  return (
    <main className="homepage">
      <section className="intro">
        <h1>Ravenswatch</h1>
        <p>
          <strong>Ravenswatch</strong> is a cooperative roguelike developed by
          Passtech Games and published by Nacon. Players embody heroes inspired
          by folklore and legends as they fight against the Nightmares corrupting
          the world.
        </p>

        <h2>About This Website</h2>
        <p>
          This is an <strong>unofficial fan-made website</strong> dedicated to
          providing information, guides, and resources about Ravenswatch. It is
          not affiliated with Passtech Games or Nacon.
        </p>

        <a
          href="https://store.steampowered.com/app/2071280/Ravenswatch/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          View Ravenswatch on Steam
        </a>
      </section>
    </main>
  );
}

export default App;

import './css/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>sunnyside</h1>
        <p>WE ARE CREATIVES</p>
      </header>
      <img
        src={require('./images/mobile/image-transform.jpg')}
        alt="transform"
        className="transform"
      />
      <div className="transform-text">
        <h1>Transform your brand</h1>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <h2>LEARN MORE</h2>
      </div>
      <img
        src={require('./images/mobile/image-stand-out.jpg')}
        className="audience1"
      />
      <img
        src={require('./images/desktop/image-stand-out.jpg')}
        className="audience2"
      />
      <div className="audience-text">
        <h1>Start out to the right audience</h1>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <h2>LEARN MORE</h2>
      </div>
      <section>
        <div className="graphic-design">
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;

import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Sunny Side</h1>
        <p>We are Creatives</p>
      </div>
      <img
        src={require('./images/mobile/image-transform.jpg')}
        alt="transform"
        className="transform"
      />
      <div className='transform-text'>
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you
        </p>
      </div>
    </div>
  );
}

export default App;

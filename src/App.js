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
    </div>
  );
}

export default App;

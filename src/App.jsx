import './App.css';
import characters from './data';
import { useState } from 'react';
import Loader from './loader';

function App() {
  const [hovered, setHovered] = useState(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="container mx-auto">
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded}
    </>
      <h1 className="title">Anime Character Cards</h1>
      <div className="card-grid" style={{ opacity: loaded ? 1 : 0, transition: 'opacity 2s ease' }}
      >
        {characters.map((char, index) => (
          <div
            key={index}
            className={`card ${hovered !== null && hovered !== index ? '' : ''} ${hovered === index ? 'active' : ''}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => window.open(char.link, '_blank')}
          >
            <img src={char.image} alt={char.name} />
            <h2>{char.name}</h2>
            {hovered === index && <div className="franchise">{char.franchise}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './assets/Head';
import { Game } from './assets/Game';
import { TrainTypes } from './assets/TrainType';
import { EffectiveGame } from './assets/EffectiveGame';
import { Error404 } from './assets/Errore';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/game-type" element={<TrainTypes />} />
      <Route path="/effective-game" element={<EffectiveGame />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default App
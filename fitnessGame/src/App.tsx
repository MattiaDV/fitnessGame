import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './assets/Head';
import { Error404 } from './assets/Errore';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default App
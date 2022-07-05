import './App.css';
import { Routes, Route } from 'react-router-dom'
import {InitialPage, InitialPageUser } from './pages';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={ <InitialPage />} />
        <Route path='/:id' element={ <InitialPageUser />} />
      </Routes>
    </div>
  );
}

export default App;

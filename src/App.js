import React from 'react';
import './css/App.css';
import Sculpture from './components/sculpture';
import Header from './components/header';

function App() {
  return (
    <div className="background">
      <Header/>
      <Sculpture/>
    </div>
  );
}

export default App;

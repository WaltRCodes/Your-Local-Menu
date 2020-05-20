import React from 'react';
import './App.css';
import Home from './components/Review/Home'
import Bkg from './Bkg.jpg'

function App() {
  return (
    <div className="App">
      <img src={Bkg} />
      <Home />
      
      
    </div>
  );
}

export default App;

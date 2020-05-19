import React from 'react';
import logo from './logo.svg';
import './App.css';
import Call from './components/Call';
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

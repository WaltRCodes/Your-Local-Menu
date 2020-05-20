import React from 'react';
import logo from './logo.svg';
import './App.css';
import Call from './components/Call';
import Home from './components/Review/Home'
import Bkg from './Bkg.jpg'
import Modal from './components/Review/Modal/Modalparent'

function App() {
  return (
    <div className="App">
         <Modal />
      <img src={Bkg} />
   
      
      
    </div>
  );
}

export default App;

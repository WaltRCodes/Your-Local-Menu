import React from 'react';
import logo from './logo.svg';
import './App.css';
import Call from './components/Call';
import ReviewCall from './components/ReviewCall';
function App() {
  return (
    <div className="App">
      <Call term="delis"/>
      <ReviewCall restuarant="prospect-san-francisco" />
      
      
    </div>
  );
}

export default App;

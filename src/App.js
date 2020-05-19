import React from 'react';
import logo from './logo.svg';
import './App.css';
import Call from './components/Call';
import ReviewCall from './components/ReviewCall';
import Search from './components/Search';
function App() {
  return (
    <div className="App">
       <h1 className="title"> Your Local Menu!</h1>
       <h1 className="city"> San Francisco Only</h1>
      <Search/>
      <Call term="delis"/>
      <ReviewCall restuarant="prospect-san-francisco" />

    </div>
  );
}

export default App;


import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Call from './components/Call';
import ReviewCall from './components/ReviewCall';


function App() {
  return (
    <div className="App">
       <h1 className="title"> Your Local Menu!</h1>
       <h1 className="city"> New York Only</h1>
      <Search/>
      <Call term="delis"/>
      <ReviewCall restuarant="prospect-san-francisco" />

      
      
    </div>
  );
}

export default App;

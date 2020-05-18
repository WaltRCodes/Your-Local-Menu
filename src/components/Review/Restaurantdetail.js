import React, { Component } from 'react';
import './Review.scss'

function Restaurant(props) {
    console.log(props.location)
    //console.log(props.imgclicked.location.display_address)
    return (
      <div className="Restaurant">
       <img src={props.imgclicked.image_url}/>
       <span>{props.imgclicked.name}</span><br />
       <span>{props.imgclicked.phone}</span>
       {/* <span>{props.imgclicked.location.display_address[0]}</span> */}
      </div>
    );
  }
  
  export default Restaurant;
  
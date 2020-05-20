import React from 'react';
import './Review.scss'

function Restaurant(props) {
    //Rendering Restaurant details in Review page
    return (
      <div>
       <img src={props.imgclicked.image_url}/><br /><br />
       <span>{props.imgclicked.name}</span><br />
       <span>{props.imgclicked.phone}</span><br />
       <span>{props.location[0]}</span><br />
       <span>{props.location[1]}</span><br />
      </div>
    );
  }
  
  export default Restaurant;
  
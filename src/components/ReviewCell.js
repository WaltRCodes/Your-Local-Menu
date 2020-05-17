import React, { Component } from 'react';

export default class Call extends Component {
    constructor(props) {
        super(props);
        
  }

      
  render() {
    return (
      <div>
          <div>
              <button>Edit</button>
              <button>Delete</button>
          </div>
        <div>
            <img />
            <span></span>
        </div>
        <p>Comment:</p>
      </div>
      
    )
  }
}
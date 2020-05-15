import React, { Component } from 'react';
import axios from 'axios';

export default class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [{}]
        }
  }

    componentDidMount() {
        {/* call the api on page load */}
        this.callApi();
    }
    async callApi() {
        try {
            
        } catch (e) {
          console.log(e);
        }
      }
  
  render() {
    return (
      <div>
        
        
      </div>
      
    )
  }
}
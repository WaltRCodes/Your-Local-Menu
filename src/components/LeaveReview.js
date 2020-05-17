import React, { Component } from 'react';

export default class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isFillingOutForm: false
        }
  }

    
  
  render() {
    return (
        this.state.isFillingOutForm ?
        <div>
            <form>

            </form>
        </div>
      :
        <div>
            <button>Leave a review</button>
        </div>
      
    )
  }
}
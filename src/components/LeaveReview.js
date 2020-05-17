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
            <form onSubmit={props.submitReview}>
                <label>
                    Name:
                    <input type="text" onChange={props.takeName} placeholder="Name"/>
                    <br />
                </label>
                <label>
                    Rating:
                    <input type="number" onChange={props.takeRating} placeholder="0.0"/>
                    <br />
                </label>
                <label>
                    Comment:
                    <input type="number" onChange={props.takeComment} placeholder="Comment"/>
                    <br />
                </label>
                <label>
                    <input type="submit" value="Submit"/>
                </label>
            </form>
        </div>
      :
        <div>
            <button>Leave a review</button>
        </div>
      
    )
  }
}
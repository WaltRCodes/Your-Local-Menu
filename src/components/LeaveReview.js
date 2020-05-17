import React, { Component } from 'react';

export default class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isFillingOutForm: false
        }

        this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
        isFillingOutForm: !prevState.isFillingOutForm
    }));
  }
  
  render() {
    return (
        this.state.isFillingOutForm ?
        <div>
            <form onSubmit={this.handleClick}>
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
            <button onClick={this.handleClick}>Leave a review</button>
        </div>
      
    )
  }
}
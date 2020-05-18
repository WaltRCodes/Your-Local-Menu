import React,{Component} from 'react';
import axios from 'axios';
import './Review.scss'

export default class Review extends Component{
    constructor(props){
        super(props)

        this.state={
            reviewData:[{}],
            value:'bv',
            txtid:0,
            id:-1
        }
    }
    componentDidUpdate=()=>{
        if(this.props.data.length>1)
        {
            this.reviewRender();
        }
    }

    componentDidMount=()=>{
        if(this.props.data.length>1)
        {
            this.reviewRender();
        }
    }
    reviewRender=()=>{

           if(this.state.reviewData==null)
           {
           this.setState({reviewData:this.props.data})
            }
    }
    handletextChange=(e)=>{
    this.setState({value:e.target.value})
    this.setState({txtid:e.target.id})
    console.log(this.state.value)
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    var temp=this.state.reviewData
    temp[this.state.txtid].text=this.state.value;
    this.setState({reviewData:temp})
    console.log(this.state.value)
    this.setState({id:-1})
    }
    delete=(e)=>{
    console.log(e.target.id)
    var del=this.state.reviewData
    delete del[e.target.id]
    this.setState({reviewData:del})
    }
    edit=(e)=>{
        e.preventDefault();
        this.setState({id:e.target.id})
    
    }
    render(){

        return(
        <div className="container">
        <h1>Reviews </h1>
        <div className="flexparent">
        {
        this.state.reviewData!=null &&
        this.state.reviewData.map((dt,i)=>(
        <div>
                <div className="flexchild">
                <div className='thumbnaildiv'>
                <img id="displaypic" src={dt.user.image_url}/>
                <p>{dt.user.name}</p>
                <div className="btn">
                <button type="submit" id={i} onClick={this.edit}>Update</button>
                <button type="submit" id={i} onClick={this.delete}>Delete</button>
                </div>
                </div>
                
                <div className="forflex">
                Reviewed on {dt.time_created}<br />
                {dt.rating} Stars  
                <textarea id={i} defaultValue={dt.text} onChange={this.handletextChange} readOnly={false} disabled={this.state.id==i ?false:true} / >
                </div>
                <button type="submit" id={i} onClick={this.handleSubmit} hidden={this.state.id==i ?false:true}>Submit</button>
                <br />
                </div>
                <br />
                </div>
                 ))
        }
                        
        <br />
        <br />
        </div>

        </div>

         );
    }
}
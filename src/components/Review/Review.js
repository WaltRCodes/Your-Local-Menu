import React,{Component} from 'react';
import axios from 'axios';
import './Review.scss'

export default class Review extends Component{
    constructor(props){
        super(props)

        this.state={
userids:null
        }
    }
    componentDidUpdate=()=>{
         if(this.props.data.length>1)
         {
            var userid
        console.log(this.props.data) 
        this.props.data.map(dt=>(
            //         dt.user.map(d=>(
            //  <p> {d.name}</p>
            //     ))
           
           userid= dt.user.name
                ))
                console.log(userid)
                if(this.state.userids==null)
                {
                this.setState({userids:userid})
                
        // console.log(this.state.userids[0].name)
                }
        }
        
    }

    componentDidMount=()=>{
        
// if(this.props.data.length>1)
console.log(this.props.data)
    }

    render(){

        return(
<div>

{
this.props.data.length>1 &&
this.props.data.map(dt=>(
           <div>
           <div className='thumbnaildiv'>
           <img id="displaypic" src={dt.user.image_url}/>
           <p>{dt.user.name}</p>
           </div>
           Reviewed on <p>{dt.time_created}</p> 
           <p>{dt.rating}</p>   
           
<p>{dt.text}</p>
           </div>
                ))

                }


    
</div>

        );
    }
}
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
    
       
   console.log() 
           
           if(this.state.userids==null)
           {
           this.setState({userids:this.props.data})
           
   // console.log(this.state.userids[0].name)
           }
   
   
}
handletextChange=(e)=>{

}
handleSubmit=(e)=>{

}
delete=(e)=>{
console.log(e.target.id)
var del=this.state.userids
delete del[e.target.id]
this.setState({userids:del})
}
edit=(e)=>{

}
    render(){

        return(
<div className="container">
<h1>Reviews </h1>
<div className="flexparent">
{
this.state.userids!=null &&


this.state.userids.map((dt,i)=>(
<div>
           <div className="flexchild">
           <div className='thumbnaildiv'>
           <img id="displaypic" src={dt.user.image_url}/>
           <p>{dt.user.name}</p>
           <div className="btn">
           <button type="submit" id={i} onClick={this.delete}>Delete</button>
           <button type="submit" id={i} onClick={this.edit}>Update</button>
           
           </div>
           </div>
          
          
            
           
           <div className="forflex">
           Reviewed on {dt.time_created}<br />
           {dt.rating} Stars  
           <textarea value={dt.text} onChange={this.handletextChange} disabled={true}  />
           
        </div>
        <button type="submit" id="change" hidden={true} onClick={this.handleSubmit}>Submit</button>
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
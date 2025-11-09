import React from 'react';
import { Component } from 'react';
function Aw() {
    const dt= new Date();
  return (
  <div>
    <h1>Hello World {dt.toString()}</h1>
    <Invite name="John" course="Physics" />
    <Invite name="Jae" course="Chemistry" /> 
    <Greet name="Amy" course="bio"/>
    <DateEx />
    <ButtonEx />
  </div>
  );
}
function Invite(props){
  return(
    <div>
        <p> Hello{props.name} i am studying in {props.course}</p>
  </div>);
}
class Greet extends Component{
    render(){
        return(
            <div>
                <h1>hello {this.props.name} {this.props.course}</h1>
            </div>  
        );      
    }
}
class DateEx extends Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    render(){
        return(
            <div>
                <p> odays date {this.state.date.toDateString()}</p>
            </div>
        );
    }
}
class ButtonEx extends Component{
    constructor(props){
        super(props);
        this.state={msg:""};
    }
    sysdate=()=>{
        const dt= new Date();
        this.setState({msg:dt.toString()});   
    }
    good=()=>{
        this.setState({msg:"GoodBye!"});
    }
    render(){
        return (
            <div>
                <button onClick={this.sysdate}>button1</button>
                <button onClick={this.good}>button2</button>
                <h2>{this.state.msg}</h2>
            </div>
        );
    }
}
export default Aw;
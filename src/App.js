import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  const dt=new Date();
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Current date and time is: {dt.toString()}</p>
      <Greet name="Alice" course="Math" />
      <Greet name="Bob" course="Science" />
      <Greet10 name="Charlie" course="History" id="1" />
      <Sys />
      <Button/>
      <App1/>
    </div>
  );
}
function Greet10(props){
  //return <h1>Hello, {props.name} {props.course}!</h1>;
  return(
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Welcome to the {props.course} course{props.id}.</p>
    </div>
  )
}
class Greet extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Welcome  the {this.props.course} course.</p>
      </div>
    );
  }
}
// function Welcome(){
//   return(
//     <div>
      
//     </div>

//   );
// }

class Sys extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }
  render(){
    return(
      <div>
        <h2>It is {this.state.date.toString()}.</h2>
      </div>
    );
  } 
}
class Button extends React.Component{
  constructor(props){
    super(props);
    this.state={message : ''};
    //this.showDate=this.showDate.bind(this);
    //this.showMessage=this.showMessage.bind(this); 
  }
  showDate=()=>{
    const dt=new Date();
    this.setState({message:dt.toString()});
  };
  showmessage=()=>{
    this.setState({message:'bye'});
  };
  render(){
    return(
      <div>
        <button onClick={this.showDate}>Show Date</button>
        <button onClick={this.showmessage}>Show Message</button>
       <h3>{this.state.message}</h3>
      </div>
    );
  }
}


class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      showMessage: true
    };
    console.log("Constructor: Component is created");
  }
  componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      `componentDidUpdate: Count changed from ${prevState.count} to ${this.state.count}`
    );
  }
  componentWillUnmount() {
    console.log("componentWillUnmount: Component will be removed");
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  toggleMessage = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };
  render() {
    console.log("Render: Component is rendering");
    return (
      <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
        <h2>React Component Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.toggleMessage}>
          {this.state.showMessage ? "Hide" : "Show"} Message
        </button>
        {this.state.showMessage && <p>Hello! I am visible</p>}
      </div>
    );
  }
}
class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDemo: true };
  }

  toggleDemo = () => {
    this.setState({ showDemo: !this.state.showDemo });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleDemo}>
          {this.state.showDemo ? "Unmount" : "Mount"} LifecycleDemo
        </button>

        {this.state.showDemo && <LifecycleDemo />}
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById("root"));


//export default LifecycleDemo;

export default App;

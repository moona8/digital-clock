import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      time:new Date(),
      logginStatus:false
    }
  }
  start () {
    this.setState({logginStatus:false})
    
  };
  stop () {
    this.setState({logginStatus:true})
    
  };
  
    currentTime(){
      setInterval(()=>{
        this.setState(this.state.time=new Date())
      }, 1000)
    }
  
  render(){
    return(
      <h1>
         <button onClick={this.state.logginStatus ? this.start() : this.stop()}>
            {this.state.logginStatus === true ? "start" : "stop"}
          </button>

        {this.state.time.toLocaleTimeString()}
        {this.currentTime()}
        {/* <button>start</button> */}
      </h1>
    )
 
  }
}

export default App;

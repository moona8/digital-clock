import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      time:new Date(),
      logginStatus:false
    }
    this.intervalId = null;
  }
  start= ()=> {
    this.setState({logginStatus:false})
    this.   currentTime()
    
  };
  stop =() =>{
    this.setState({logginStatus:true})
    clearInterval(this.intervalId)  
  };

  componentDidMount(){
    this.currentTime()
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }
  
  currentTime(){
    this.intervalId= setInterval(()=>{
      this.setState({time:new Date()})
    }, 1000)
  }
  render(){
    console.log(this.intervalId,'this.intervalId')
    return(
      <h1>
         <button onClick={()=>this.state.logginStatus ? this.start() : this.stop()}>
            {this.state.logginStatus === true ? "start" : "stop"}
          </button>

        {this.state.time.toLocaleTimeString()}
     
        
      </h1>
    )
 
  }
}

export default App;

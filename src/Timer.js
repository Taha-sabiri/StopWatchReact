import React from 'react';
import ReactDOM from 'react-dom';


var interval;

class Timer extends React.Component{
    constructor(){
      super();
      this.state ={
        time : 0
      }
      
    }
    componentDidMount(){
        interval = setInterval(() => {
            this.setState({
              time :  this.state.time+1
            })
          }, 1000);

    }

    componentDidUpdate(){
        
    }

    stopWatch=()=>{
        clearInterval(interval)
    }
    startWatch=()=>{
        interval = setInterval(() => {
            this.setState({
              time :  this.state.time+1
            })
          }, 1000);
    }
    resetWatch=()=>{
        this.setState({
            time:0
        })
    }


    render(){
      
      return(
        <>
            <h1 className="timer">ثانیه {this.state.time}</h1>
            
            <div className='btn'>
                <button onClick={this.stopWatch}> استپ</button>
                <button onClick={this.startWatch}> شروع</button>
                <button onClick={this.resetWatch}> ریست</button>
            </div>
            

            
        </>
        
      )
    }
  }

  export default Timer;
  

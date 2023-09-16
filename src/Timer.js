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
    isLight=()=>{
        if(this.props.isLight==true){
            this.setState({
                isLightx :false
            })
        }
        
    }


    render(){
      
      return(
        <>
            <h1 className="timer"  style={{background:this.props.isLightx?"black" : "white" , boxShadow:this.props.isLightx? "0 0 50px black" : "0 0 50px white"} }>ثانیه {this.state.time}</h1>
            
            <div className='btn' >
                <button onClick={this.stopWatch} style={{color:this.props.isLightx?"black" : "white" , borderColor:this.props.isLightx?"black" : "white"} }> استپ</button>
                <button onClick={this.startWatch}  style={{color:this.props.isLightx?"black" : "white" , borderColor:this.props.isLightx?"black" : "white"} }> شروع</button>
                <button onClick={this.resetWatch}  style={{color:this.props.isLightx?"black" : "white" , borderColor:this.props.isLightx?"black" : "white"} }> ریست</button>
                <button onClick={this.props.hndSetLight}  style={{color:this.props.isLightx?"black" : "white" , borderColor:this.props.isLightx?"black" : "white"} }> روشن خاموش</button>
            </div>
            

            
        </>
        
      )
    }
  }

  export default Timer;
  

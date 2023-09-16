import React from 'react';
import ReactDOM from 'react-dom';



class Hello extends React.Component{
    render(){
        console.log(this.props);
      return(
        <h1  style={{color:this.props.isLightx?"black" : "white" , borderColor:this.props.isLightx?"black" : "white"} }>
             {this.props.title}
        </h1>
      )
    }
  }

export default Hello;
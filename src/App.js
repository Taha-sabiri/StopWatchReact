import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import Timer  from './Timer';


class App extends React.Component{

  constructor(){
    super();

    this.state={
      title:"من سلام دوستان"
    }
   
  }
  



    render(){
      
      return (
        
        <div className='main'>
          
          <Hello title={this.state.title}/>
          <Timer/>
          
        </div>
      )
    }
  }

  export default App;
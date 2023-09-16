import React , {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import Timer  from './Timer';


// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       title:"من سلام دوستان"
//     }
   
//   }
//     render(){
//       return (
        
//         <div className='main'>
          
//           <Hello title={this.state.title}/>
//           <Timer/>
          
//         </div>
//       )
//     }
//   }

const App = ()=>{

    const  [title, setTitle]=useState("تایمر");
    const  [time, setTime]=useState(0);
    const  [isLight, setIsLight]=useState(false);

    useEffect(()=>{

    },[ ])


    const hndSetLight = ()=>{
      setIsLight(!isLight)
    }

    return(
      <div className='main' style={{background:isLight ?"white" : "black" }}>
          <Hello title={title } time={time} isLightx={isLight} />
          <Timer time={time} isLightx={isLight} hndSetLight={hndSetLight} />
      </div>
    )

}
  export default App;
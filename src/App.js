import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';
let name = 'Abhishek';
function App() {
  const [mode , Setmode] = useState('light');
  const togglemode = ()=>{
    if(mode === 'light'){
      Setmode('dark');
      document.body.style.backgroundColor = "#042743";
    }
    else {
      Setmode("light");
      document.body.style.backgroundColor = "#ffffff";
    }
  }
  return (
   <>
   <div>
   <Navbar title="Textutils" mode={mode} togglemode={togglemode}/>
   <div className='container my-3'>
  <Textform heading="Enter the text to analyze below" mode={mode}/>
   </div>
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;

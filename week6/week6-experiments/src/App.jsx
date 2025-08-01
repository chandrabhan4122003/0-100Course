import { useEffect, useState,useMemo } from 'react';
import './App.css';
// import axios from 'axios';
function App() {
  const[id,setId]=useState(0);
  const[inputValue,setInputValue]=useState(0)
 
  const handleChange=(e)=>{
    setInputValue(e.target.value);
  }
 let count=useMemo(()=>{

   let total=0;
   for(let i=0;i<inputValue;i++){
   total+=i;
   }
   return total;
 },[inputValue])
    
 
  return (
    <>
   <div>
    <input value={inputValue} onChange={handleChange}type="number" placeholder="Enter your number" />
    <br></br>
    <h3>Sum from 1 to {inputValue}: {count}</h3>
    <button onClick={function(){
      setId(id+1);
      
    }}>Counter ({id})</button>
   </div>
    </>
  )
}



export default App;

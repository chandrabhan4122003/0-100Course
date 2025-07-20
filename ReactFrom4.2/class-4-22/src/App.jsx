import { useState } from 'react'
import './App.css'



// todo application
// todo 
// {
    // todos:[{title:"todo1",description:"first todo",completed:""}]
// }

function App() {
  const [todos,setTodos]=useState([
    {title:"go to gym from 7-9",
      description:"go to gym and do some exercise",
      completed:false
    },{
      title:"study dsa",
      description:"study dsa and practice problems",
      completed:true
    }
  ])

  
  return (
    <>
    
    </>
  )
}


export default App

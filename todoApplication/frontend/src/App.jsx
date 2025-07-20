import { useState,useEffect} from 'react'
import { CreateTodo } from './components/CreateTodo'
import './App.css'
import { Todos } from './components/Todos'

function App() {
  const [todos,setTodos]=useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch((err) => {
        console.error("Failed to fetch todos:", err);
      });
  }, []); 
  return (
    <>
     <div>
      <CreateTodo></CreateTodo>
      {/* <Todos todos={[
        {
          title:"asd",
          description:"asdasd",
          completed:false
        }
      ]}></Todos> */}
      <Todos todos={todos}></Todos>
     </div>
    </>
  )
}

export default App

export function CreateTodo(){
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("");
  return <div>
    <input onChange={function(e){
      const value=e.target.value;
      setTitle(value)
    }}id="title"style={{
      padding:10,
      margin:10
    }}type="text" placeholder="title">
    </input>
    <br></br>
    <input onChange={function(e){
      const value=e.target.value;
      setDescription(value);
    }} style={{
      padding:10,
      margin:10
    }}type="text" placeholder="description"></input>
    <br></br>
    <button style={{
      padding:10,
      margin:10
    }} onClick={()=>{
      fetch("http://localhost:3000/todos",{
        method:"POST",
        body:JSON.stringify({
          title:title,
          description:""
        }),
        headers:{
          "Content-Type":"application/json"
        }
      }) 
        .then(async function(res){
          const json=await res.json();
          alert("todo added");
        })
    }}>add a todo</button>
  </div>
}

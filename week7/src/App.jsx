import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1}/>
      <br></br>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/>

    </RecoilRoot>
  );
}

function Todo({id}){
  const currentTodo=useRecoilValue(todosAtomFamily(id));
  return (
    <>
    {currentTodo.title}
    {currentTodo.description}
    </>
  )
}
export default App;

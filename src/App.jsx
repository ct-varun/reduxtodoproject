import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/addTodo";
import Todos from "./Components/todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>redux toolkit incoming</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;

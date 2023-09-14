import AllTodo from "./components/AllTodo";
import TodoContext from "./context/TodoContext";
import "./index.css"
function App() {



  return (

    <TodoContext>
 <div className="flex justify-center ">
 <AllTodo/>
 </div>

    </TodoContext>

  );
}

export default App;

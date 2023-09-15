import AllTodo from "./components/AllTodo";
import TodoContext from "./context/TodoContext";
import "./index.css"
// import img from "../src/pages/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
function App() {



  return (

    <TodoContext>
       {/* <img src={img} alt="" /> */}
 <div className="flex justify-center ">
 <AllTodo/>
 </div>

    </TodoContext>

  );
}

export default App;

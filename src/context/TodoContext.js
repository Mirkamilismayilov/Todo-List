/* eslint-disable no-self-assign */
/* eslint-disable default-case */
import { createContext,  useEffect,  useState } from "react";
import React from 'react'
import { toast } from "react-toastify";
export const Context = createContext()


const TodoContext = ({children}) => {

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [listCount,setListCount] = useState(0)
  var   [completedCount,setCompletedCount] = useState(0)


  useEffect(()=>{
    const todosSaved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(todosSaved);
    const completedSaved = JSON.parse(localStorage.getItem("completed"));
    setCompletedCount(completedSaved)
    const listSaved = JSON.parse(localStorage.getItem("listSaved"));
    setListCount(listSaved)

  }, [])



  const handleChange = (e)=>{
    setInputValue(e.target.value);
  }


  const submit = (e)=>{
    e.preventDefault();
    
    if(inputValue.trim() === ""){
      toast.error('List bosdur !');

    }else{
    
      setTodos([...todos,item1])
    localStorage.setItem("todos",JSON.stringify([...todos,inputValue]))
      setInputValue("");
      
      setListCount(listCount+1);
      localStorage.setItem("listSaved", JSON.stringify(listCount+1))

      toast.success('List elave edildi !');

    }
  }
  console.log(todos);


  const todoDelete = (id)=>{
    let filtered = todos.filter(todo=>todo.id !== id)
    setTodos(filtered)
    // console.log(filtered,"filtered");
    setListCount(listCount-1)
     localStorage.setItem("listSaved",JSON.stringify(listCount-1))

     localStorage.setItem("todos",JSON.stringify(filtered))

     todos.map((item)=>{
      console.log(item,"item");
      if (item.id === id) {
        item.completed = item.completed;

        if(item.completed === true){
          completedCount--;
           toast('List tamamlandi !')
        }
      }
      return item;
    })
    setCompletedCount(completedCount);

     localStorage.setItem("completed",JSON.stringify(completedCount));
  }
    
  const TodoEdit = (id)=>{
    let editComp = todos.map((item)=>{
      if(item.id === id){
         item.completed = !item.completed;

         if(item.completed === true){
            completedCount++;
        }else{
          completedCount--;
        }


      }
      
      return item 
  
    })
    setCompletedCount(completedCount);
    setTodos(editComp)


  }


 const AllDelete = ()=>{

  setTodos([])
  setListCount(0)
  setCompletedCount(0)
 }







  const item1 = {
    id:Math.floor(Math.random()*1000),
    value:inputValue,
    completed:false,
    isEditing:false
  }

    const data = {
      inputValue,
      setInputValue,
      todos,
      setTodos,
      handleChange,
      submit,
      todoDelete,
      item1,
      listCount,
      setListCount,
      completedCount,
      setCompletedCount,
      TodoEdit,
      AllDelete
           
       }
       



  return (
    <Context.Provider value={data}>
      {children}

    </Context.Provider>
  )
}

export default TodoContext




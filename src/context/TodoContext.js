/* eslint-disable no-const-assign */
/* eslint-disable no-self-assign */
/* eslint-disable default-case */
import { createContext, useState } from "react";
import React from 'react'

export const Context = createContext()

const TodoContext = ({ children }) => {

  const [inputValue, setInputValue] = useState("");
  var [todos, setTodos] = useState([]);
  var [listCount, setListCount] = useState(0)
  var [completedCount, setCompletedCount] = useState(0)

  // useEffect(()=>{
  //   const todosSaved = JSON.parse(localStorage.getItem("todos")) || [];
  //   setTodos(todosSaved);
  //   const completedSaved = JSON.parse(localStorage.getItem("CompletedSaved"));
  //   setCompletedCount(completedSaved)
  //   const listSaved = JSON.parse(localStorage.getItem("listSaved"));
  //   setListCount(listSaved)
  // }, [])

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {

    } else {

      setTodos([...todos, item1])
      localStorage.setItem("todos", JSON.stringify([...todos, inputValue]))
      setInputValue("");
      setListCount(listCount + 1);
      localStorage.setItem("listSaved", JSON.stringify(listCount + 1))
    }
  }

  const todoDelete = (id) => {

    let filtered = todos.filter(todo => todo.id !== id)
    setTodos(filtered)
    setListCount(listCount - 1);
    localStorage.setItem("listSaved", JSON.stringify(listCount - 1))

    todos.map((item) => {
      if (item.id === id) {
        item.completed = item.completed

        if (item.completed === true) {
          localStorage.setItem("CompletedSaved", JSON.stringify(completedCount - 1))
          completedCount--
        }

        console.log(item.completed);
      }
      return item
    })
    setCompletedCount(completedCount)
  }


  const todoEdit = (id) => {
    let edit = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed

        if (item.completed === true) {
          localStorage.setItem("CompletedSaved", JSON.stringify(completedCount + 1))
          completedCount++
        } else {
          localStorage.setItem("CompletedSaved", JSON.stringify(completedCount - 1))
          completedCount--
        }
      }
      return item
    })

    setCompletedCount(completedCount)
    setTodos(edit)

  }

  const AllDelete = () => {

    // localStorage.setItem("AllDeleteCompletedSaved", JSON.stringify(completedCount=0))
    // localStorage.setItem("AllDeleteListSaved", JSON.stringify(listCount=0))
    // localStorage.setItem("AllDeleteTodosSaved", JSON.stringify(todos=[]))
    setTodos([])
    setListCount(0)
    setCompletedCount(0)
  }

  const item1 = {
    id: Math.floor(Math.random() * 1000),
    value: inputValue,
    completed: false
  }

  const data = {
    inputValue,
    setInputValue,
    todos,
    setTodos,
    handleChange,
    submit,
    listCount,
    setListCount,
    completedCount,
    setCompletedCount,
    item1,
    todoDelete,
    todoEdit,
    AllDelete,
  }

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}

export default TodoContext




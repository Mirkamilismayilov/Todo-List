import React, { useContext } from "react";

import { Context } from "../context/TodoContext";
import { GrEdit, GrTrash } from "react-icons/gr";

const NewTodo = ({ todo, index }) => {
  const { todoDelete, TodoEdit } = useContext(Context);
  return (
    <div className="w-full flex justify-center items-center">
      <li
        className="p-6 bg-orange-500 w-[80%] text-[20px] flex justify-between  "
        key={index}
      >
        <p className={todo.completed ? "completed" : ""}>{todo.value}</p>

        <div className="flex gap-10 items-center justify-center">
          <GrEdit onClick={() => TodoEdit(todo.id)} />
          <GrTrash onClick={() => todoDelete(todo.id)} />
        </div>
      </li>
    </div>
  );
};

export default NewTodo;

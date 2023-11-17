import React, { useContext } from "react";

import { GrEdit, GrTrash } from "react-icons/gr";
import { Context } from "../context/TodoContext";

const NewTodo = ({ todo, index }) => {
  const { todoDelete, todoEdit } = useContext(Context);

  return (
    <div className="w-full text-white flex justify-center items-center">
      <li
        className="p-3 border-b-2 w-[80%] text-[17px]  flex justify-between  "
        key={index}
      >
        <p className={todo.completed ? "completed" : ""}>{todo.value}</p>

        <div className="flex gap-7 items-center justify-center">
          <GrEdit className="text-[20px] cursor-pointer" onClick={() => todoEdit(todo.id)} />
          <GrTrash className="text-[20px] cursor-pointer" onClick={() => todoDelete(todo.id)} />
        </div>
      </li>
    </div>
  );
};

export default NewTodo;

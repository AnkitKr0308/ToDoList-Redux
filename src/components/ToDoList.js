import React, { useState } from "react";
import { removeToDo, updateToDo } from "../features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";

function ToDoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [editId, setEditId] = useState(null);
  const [edittext, setEditText] = useState("");

  const updateHandler = () => {
    dispatch(updateToDo({ id: editId, text: edittext }));
    setEditId(null);
    setEditText("");
  };

  const editHandler = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  return (
    <>
      <div className="w-36 mx-auto text-center bg-slate-400 rounded text-3xl font-semibold">
        Todos
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                type="text"
                className="text-black px-2 py-1 rounded w-full mr-4"
                value={edittext}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}
            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={updateHandler}
                  className="text-white bg-green-500 border-0 py-1 px-4 mr-2 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    editHandler(todo);
                  }}
                  className="text-white bg-yellow-500 border-0 py-1 px-4 mr-2 focus:outline-none hover:bg-yellow-600 rounded text-md"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeToDo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;

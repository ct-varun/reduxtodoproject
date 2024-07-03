import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { updateTodo } from "../features/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const update = useSelector((state) => state.update);

  const TodoHandler = (e) => {
    e.preventDefault();
    if (update.isUpdate) {
      dispatch(updateTodo({ id: update.id, text: input }));
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <form onSubmit={TodoHandler} className="space-x-3 mt-12">
      {update && (
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder={update.isUpdate ? "update this todo" : "Enter a Todo..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      )}
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {update.isUpdate ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;

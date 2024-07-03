import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
  update: { isUpdate: false, id: "" },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    updateTodo: (state, action) => {
      console.log("update function");
      console.log(action.payload);
      state.todos.map((item) => {
        if (item.id == action.payload.id) {
          item.text = action.payload.text;
          state.update.isUpdate = false;
          return item;
        }
      });
    },
    changePlaceholder: (state, action) => {
      console.log("working");
      state.update.isUpdate = true;
      state.update.id = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateTodo, changePlaceholder } =
  todoSlice.actions;

export default todoSlice.reducer;

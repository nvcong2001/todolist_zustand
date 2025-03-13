"use client";
import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import DeleteButton from "./DeleteButton";

const TodoForm = () => {
  return (
    <div className="bg-white max-w-1/2 ml-auto mr-auto">
      <h2 className="w-full h-20 text-center font-semibold text-4xl leading-[80px]">
        TodoInput
      </h2>
      <TodoInput />
      <TodoList />
      <DeleteButton />
    </div>
  );
};

export default TodoForm;

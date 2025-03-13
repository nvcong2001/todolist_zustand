"use client";
import React from "react";
import useTodoStore from "../store";

const DeleteButton = () => {
  const deleteAll = useTodoStore((state) => state.deleteAll);
  const deleteDone = useTodoStore((state) => state.deleteDone);

  return (
    <div className="ml-auto mr-auto w-5/6 pb-11 pt-3 flex justify-between">
      <button
        className="rounded-xs w-[45%] leading-10 bg-red-700 text-white cursor-pointer"
        onClick={deleteDone}
      >
        Delete done tasks
      </button>
      <button
        className="rounded-xs w-[45%] leading-10 bg-red-700 text-white cursor-pointer"
        onClick={deleteAll}
      >
        Delete all tasks
      </button>
    </div>
  );
};

export default DeleteButton;

import React from "react";
import TodoItem from "./TodoItem";
import useTodoStore from "../store";

const TodoList = () => {
  const setFilter = useTodoStore((state) => state.setFilter);
  const tasks = useTodoStore((state) => state.tasks);
  const filter = useTodoStore((state) => state.filter);
  const deleteTask = useTodoStore((state) => state.deleteTask);
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const editTask = useTodoStore((state) => state.editTask);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "done") return task.isDone;
    if (filter === "todo") return !task.isDone;
    return true;
  });
  return (
    <div>
      <h2 className="w-full h-20 text-center font-semibold text-4xl leading-[80px]">
        TodoList
      </h2>
      <div className="ml-auto mr-auto w-5/6 mb-12 flex justify-between">
        <button
          className={`rounded-xs w-[30%] leading-10 bg-[#3bb8ce] text-white cursor-pointer hover:opacity-80 ${
            filter === "all" ? "opacity-80" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`rounded-xs w-[30%] leading-10 bg-[#3bb8ce] text-white cursor-pointer hover:opacity-80 ${
            filter === "done" ? "opacity-80" : ""
          }`}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
        <button
          className={`rounded-xs w-[30%] leading-10 bg-[#3bb8ce] text-white cursor-pointer hover:opacity-80 ${
            filter === "todo" ? "opacity-80" : ""
          }`}
          onClick={() => setFilter("todo")}
        >
          Todo
        </button>
      </div>
      <ul className="h-[400px] overflow-auto">
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onEdit={editTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

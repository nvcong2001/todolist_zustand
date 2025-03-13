import {create} from "zustand";

export interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

interface TodoState {
  tasks: Task[];
  filter: "all" | "done" | "todo";
  addTask: (taskTitle: string) => void;
  toggleTask: (id: string) => void;
  editTask: (id: string, newTitle: string) => void;
  deleteTask: (id: string) => void;
  deleteDone: () => void;
  deleteAll: () => void;
  setFilter: (filter: "all" | "done" | "todo") => void;
}

const useTodoStore = create<TodoState>((set) => ({
  tasks: [], // Bạn có thể khởi tạo với dữ liệu từ file Data nếu cần
  filter: "all",
  addTask: (taskTitle: string) => {
    if (!taskTitle.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskTitle,
      isDone: false,
    };
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
  toggleTask: (id: string) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      ),
    }));
  },
  editTask: (id: string, newTitle: string) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      ),
    }));
  },
  deleteTask: (id: string) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  deleteDone: () => {
    set((state) => ({
      tasks: state.tasks.filter((task) => !task.isDone),
    }));
  },
  deleteAll: () => {
    set({ tasks: [] });
  },
  setFilter: (filter: "all" | "done" | "todo") => {
    set({ filter });
  },
}));

export default useTodoStore;

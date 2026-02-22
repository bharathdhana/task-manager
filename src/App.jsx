import { useState, useEffect, useMemo } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import FilterBar from "./FilterBar";
import Stats from "./Stats";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, done: false }]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  const visibleTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.done);
    if (filter === "done") return tasks.filter((t) => t.done);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="w-full max-w-lg p-4 sm:p-8">
      <div className="glass rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent mb-2">
            Smart Task Manager
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Elevate your productivity
          </p>
        </header>

        <TaskInput onAdd={addTask} />

        <FilterBar current={filter} onChange={setFilter} />

        <TaskList items={visibleTasks} onToggle={toggleTask} />

        <Stats tasks={tasks} />
      </div>
    </div>
  );
}

import { useRef } from "react";

export default function TaskInput({ onAdd }) {
  const inputRef = useRef();

  const handleAdd = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;
    onAdd(value);
    inputRef.current.value = "";
  };
  return (
    <div className="flex flex-col gap-3 mb-8">
      <div className="relative group">
        <input
          ref={inputRef}
          placeholder="Enter a new task..."
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 group-hover:bg-white/10"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-500" />
      </div>
      <button
        onClick={handleAdd}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all duration-200"
      >
        Add Task
      </button>
    </div>
  );
}

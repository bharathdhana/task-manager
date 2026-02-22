export default function TaskList({ items, onToggle }) {
  if (items.length === 0) {
    return (
      <p className="text-center text-slate-400 py-4">
        No tasks yet. Add one above!
      </p>
    );
  }
  return (
    <div className="space-y-3 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
      {items.map((task) => (
        <div
          key={task.id}
          className="group flex justify-between items-center bg-white/5 border border-white/10 px-5 py-4 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:translate-x-1"
        >
          <span
            className={`flex-1 text-lg font-medium transition-all duration-500 ${task.done ? "line-through text-slate-500 opacity-60" : "text-white"
              }`}
          >
            {task.text}
          </span>

          <button
            onClick={() => onToggle(task.id)}
            className={`cursor-pointer w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${task.done
                ? "bg-green-500 border-green-500 text-white"
                : "border-slate-500 hover:border-blue-500 text-transparent"
              }`}
          >
            {task.done && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      ))}
    </div>
  );
}

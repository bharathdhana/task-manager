import { useMemo } from "react";

export default function Stats({ tasks }) {
  const { total, completed } = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.done).length;
    return { total, completed };
  }, [tasks]);

  if (!total) return null;

  return (
    <div className="flex justify-center">
      <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-400 tracking-wider uppercase">
        {completed} / {total} Tasks Completed
      </div>
    </div>
  );
}

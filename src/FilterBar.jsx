export default function FilterBar({ current, onChange }) {
  const btn = (name) =>
    `flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${current === name
      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40 translate-y-[-1px]"
      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
    }`;

  return (
    <div className="flex p-1 gap-1 bg-white/5 border border-white/10 rounded-2xl mb-8">
      <button className={btn("all")} onClick={() => onChange("all")}>
        All
      </button>
      <button className={btn("active")} onClick={() => onChange("active")}>
        Active
      </button>
      <button className={btn("done")} onClick={() => onChange("done")}>
        Done
      </button>
    </div>
  );
}

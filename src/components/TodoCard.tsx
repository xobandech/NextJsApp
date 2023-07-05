"use client"
export type TodoCardProps = {
  id: string;
  title: string;
  completed: false;
  toggleTodo: () => void;
};

export function TodoCard({ id, title, completed, toggleTodo }: TodoCardProps) {
  return (
    <li className="flex gap-1 items-center">
        <input type="checkbox" id={id} className="cursor-pointer peer" onChange={(e) => toggleTodo(e.target.checked, id)} />
        <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500">{title}</label>
    </li>
  );
}

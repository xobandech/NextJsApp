"use client";
import { TodoCardProps } from "@/types/TodoCardProps";
export function TodoCard({ id, title, completed, toggleTodo }: TodoCardProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        type="checkbox"
        id={id}
        className="cursor-pointer peer"
        defaultChecked={completed}
        onChange={(e) => toggleTodo(e.target.checked, id)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}

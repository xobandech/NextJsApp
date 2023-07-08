import { prisma } from "@/db"
import Link from "next/link"
import { TodoCard } from "@/components/TodoCard"

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo (completed:boolean, id:string) {
  "use server"
  await prisma.todo.update({ where: { id }, data: { completed }})
}

export default async function Home() {
  const todos = await getTodos()
  return (
    <>
    <header className="flex justify-center m-4 items-center">
      <h1 className="text-2xl mr-4">Todos</h1>
      <Link className="p-3 border border-solid border-[#f4f4f4] rounded-xl" href="/new">New</Link>
    </header>
    <ul className="flex flex-col items-center">
      {todos.map(todo => ( 
        <TodoCard {...todo} toggleTodo={toggleTodo} key={todo.id} />
      ))}
    </ul>
    </>
    )
}

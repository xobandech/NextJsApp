import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf()
  if ( typeof title != "string" || !title.length ) return
  
  await prisma.todo.create({data: {title: title, completed:false}})
  redirect("/")
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between m-4 items-center">
        <h1 className="text-2xl">New Todo</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="p-3 border text-black border-solid border-[#f4f4f4] rounded-xl"
        />
        <div className="pt-2 flex gap-2 justify-end">
          <Link
            className="p-3 border border-solid border-[#f4f4f4] rounded-xl"
            href=".."
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="p-3 border border-solid border-[#f4f4f4] rounded-xl"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

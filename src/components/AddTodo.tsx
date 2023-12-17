// const AddTodo : any () => < h2> I am add todo  </h2>
"use client";
import { FormEvent, useState } from "react";
import { useTodos } from "@/store/todos";

export function AddTodo() {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = useTodos();

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddTodo(todo); // to add the data in an array
    setTodo("");
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="grid gap-5 grid-cols-3 grid-rows-1 px-5 my-8 items-center"
    >
      <input
        className="rounded-lg text-black  p-3 lg:mr-5 placeholder:text-black/30 block py-1.5 w-full
          shadow-sm  focus:outline-none border-2 bg-transparent border-gray-600 placeholder:text-gray-400  focus:border-blue-600 transition-all col-span-3 lg:col-span-2 row-span-1"
        type="text"
        placeholder="Write your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-2 hover:opacity-70 rounded-full col-span-3 lg:col-span-1
            bg-red-600 shake-horizontal"
      >
        ADD
      </button>
    </form>
  );
}

export default AddTodo;

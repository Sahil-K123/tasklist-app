"use client";
import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  // console.log("params " + todosFilter);

  let filteredTodos = todos;

  if (todosFilter === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (todosFilter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <ul className="flex flex-col justify-center items-center">
      {filteredTodos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="min-h-[4rem] px-6 min-w-[100%] grid grid-cols-3 items-center border-y border-gray-600 my-3"
          >
            {/*Assigns a unique ID to the checkbox. The ID is created by concatenating the string "todo-" with the id property of the todo object.*/}
            <input
              className="w-5 h-5 cursor-pointer justify-self-start"
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => {
                // console.log(todo.completed)
                toggleTodoAsCompleted(todo.id);
              }}
            />

            <label
              htmlFor={`todo-${todo.id}`}
              className={`${
                todo.completed ? "line-through text-red-400 " : ""
              } justify-self-start`}
            >
              {" "}
              {todo.task}
            </label>

            {todo.completed && (
              <button
                className="p-2 text-sm w-28 inline-block rounded-full bg-gray-600 hover:bg-blue-600 justify-self-end"
                type="button"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;

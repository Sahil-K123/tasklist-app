"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const Navbar = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  // console.log("navbar " + todosFilter);

  return (
    <nav className="mt-5 min-h-full flex items-center justify-around py-5">
      <Link
        href="/"
        className={`${
          todosFilter === null
            ? `text-blue-500 px-2 bg-slate-900 py-1 rounded-md transition-all active:border-blue-600
            focus:border-blue-600 border-2 hover:bg-slate-700 focus:outline-none border-transparent`
            : `px-2 py-1 text-gray-500 hover:border-b border-blue-400 animate-pulse`
        }`}
      >
        {" "}
        All{" "}
      </Link>
      <Link
        href="/?todos=active"
        className={`${
          todosFilter === "active"
            ? `text-blue-500 px-2 bg-slate-900 py-1 rounded-md transition-all active:border-blue-600
            focus:border-blue-600 border-2 hover:bg-slate-700 focus:outline-none border-transparent`
            : `px-2 py-1 text-gray-500 hover:border-b border-blue-400 animate-pulse`
        }`}
      >
        {" "}
        Active{" "}
      </Link>
      <Link
        href="/?todos=completed"
        className={`${
          todosFilter === "completed"
            ? `text-blue-500 px-2 bg-slate-900 py-1 rounded-md transition-all active:border-blue-600
            focus:border-blue-600 border-2 hover:bg-slate-700 focus:outline-none border-transparent`
            : `px-2 py-1 text-gray-500 hover:border-b border-blue-400 animate-pulse`
        }`}
      >
        {" "}
        Completed{" "}
      </Link>
    </nav>
  );
};

export default Navbar;

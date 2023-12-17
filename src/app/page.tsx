import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <main className="p-5 inset-0 mx-auto md:w-[75vh]">
      <div className="flex justify-end p-2">
        {/* <button className="bg-red-600 rounded-md p-2"> Logout </button> */}
      </div>
      <h1 className="font-bold text-2xl flex justify-center items-center border-b my-5 py-5 border-gray-600 ">
        TODO-APP
      </h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
}

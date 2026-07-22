import { useState } from "react";
import api from "../api/axios";

const Todo = () => {

  const [todo,setTodo] = useState({
    title:"",
    description:"",
    status:"",
  })

  const handleChange = (e)=>{
    setTodo({
      ...todo,[e.target.name]:e.target.value
    })
  }

   const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
     const response = await api.post("/todo/create",todo);
     console.log(response.data.todo);
    }
    catch(error){
      console.log(error.response?.data?.message);
    }
   }


  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-zinc-800 border border-zinc-700 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Create Todo
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={todo.title}
              placeholder="Enter todo title"
              className="w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Description
            </label>
            <textarea
              rows="5"
              name="description"
              value={todo.description}
              onChange={handleChange}
              placeholder="Enter todo description"
              className="w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white placeholder-gray-500 outline-none resize-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Status
            </label>
            <select
              name="status"
              value={todo.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Create Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default Todo;

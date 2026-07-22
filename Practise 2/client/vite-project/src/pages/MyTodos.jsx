import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const MyTodos = () => {
    const navigate = useNavigate();
 const [todos,setAllTodos] = useState([]);

 useEffect(()=>{
    const allTodos = async()=>{
        try{
   const response = await api.get("/todo/alltodo",todos);
   console.log(response.data.data);
   setAllTodos(response.data.data);
        }
        catch(error){
            console.log(error.response?.data?.message);
        }
    };allTodos();
 },[])


  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold">My Todos</h1>
            <p className="text-gray-400 mt-2">
              Manage all your daily tasks in one place.
            </p>
          </div>

          <button onClick={()=>navigate('/todo')} className="bg-emerald-600 hover:bg-emerald-700 transition px-6 py-3 rounded-lg font-semibold cursor-pointer">
            + Create Todo
          </button>
        </div>

       
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search todos..."
            className="w-full md:w-96 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

     
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            
        
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 hover:border-emerald-500 transition">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Learn React</h2>

              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                Pending
              </span>
            </div>

            <p className="text-gray-400 mb-6">
              Complete React Hooks, Context API, Redux Toolkit and build a
              project using them.
            </p>

            <div className="flex items-center justify-between">
              <small className="text-gray-500">Created: 20 July 2026</small>

              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                  Edit
                </button>

                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium">
                  Delete
                </button>
              </div>
            </div>
          </div>

          
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 hover:border-emerald-500 transition">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Complete Backend API</h2>

              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                Completed
              </span>
            </div>

            <p className="text-gray-400 mb-6">
              Finish authentication, CRUD operations, and deployment.
            </p>

            <div className="flex items-center justify-between">
              <small className="text-gray-500">Created: 18 July 2026</small>

              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                  Edit
                </button>

                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium">
                  Delete
                </button>
              </div>
            </div>
          </div>

          
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 hover:border-emerald-500 transition">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Practice DSA</h2>

              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                Pending
              </span>
            </div>

            <p className="text-gray-400 mb-6">
              Solve at least five array and string problems today.
            </p>

            <div className="flex items-center justify-between">
              <small className="text-gray-500">Created: 17 July 2026</small>

              <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                  Edit
                </button>

                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="hidden mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-300">No Todos Found</h2>

          <p className="text-gray-500 mt-3">
            Create your first todo to get started.
          </p>

          <button className="mt-6 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold">
            Create Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTodos;

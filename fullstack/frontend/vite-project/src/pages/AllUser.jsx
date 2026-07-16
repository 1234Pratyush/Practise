import  { useEffect, useState } from "react";
import axios from 'axios';

const AllUser = () => {

    const [users,setUsers] = useState([]);

      const API = import.meta.env.VITE_API_URL;

      useEffect(()=>{

    const allUsers = async () => {
   try {
     const response = await axios.get(`${API}/users/allUsers`, users);
     console.log(response.data.data);
     setUsers(response.data.data);
   } catch (error) {
     console.log("ERROR", error.message);
   }
 };allUsers()

      },[API])

 
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">All Users</h1>
            <p className="text-gray-500 mt-2">
              View all submitted form details.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
            + Add User
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left">#</th>
                <th className="py-4 px-6 text-left">Full Name</th>
                <th className="py-4 px-6 text-left">Email</th>
                <th className="py-4 px-6 text-left">Phone</th>
                <th className="py-4 px-6 text-left">Message</th>
                <th className="py-4 px-6 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-slate-50 transition"
                >
                  <td className="py-5 px-6">{index + 1}</td>

                  <td className="py-5 px-6 font-semibold text-slate-700">
                    {user.fullName}
                  </td>

                  <td className="py-5 px-6 text-gray-600">{user.email}</td>

                  <td className="py-5 px-6 text-gray-600">{user.phone}</td>

                  <td className="py-5 px-6 text-gray-600">{user.message}</td>

                  <td className="py-5 px-6">
                    <div className="flex justify-center gap-3">
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                        Edit
                      </button>

                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500">
          Total Users:{" "}
          <span className="font-semibold text-slate-700">{users.length}</span>
        </div>
      </div>
    </div>
  );
};

export default AllUser;

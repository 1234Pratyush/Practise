import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditUser = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${API}/users/getUser/${id}`);
        console.log(response.data.data);
        setForm(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, []);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const response = await axios.put(`${API}/users/update/${id}`,form);
        console.log(response.data);
        navigate("/allUsers");
    }
    catch(error){
        console.log(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">
          Edit Form
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Fill in the details below
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white cursor-pointer py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", login);
      console.log(response.data.user);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-zinc-900">
      <div className="w-full max-w-md bg-zinc-800 border border-zinc-700 rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="mt-2 text-gray-400">Login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={login.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-emerald-400 hover:text-emerald-300 transition"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={login.password}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-zinc-600"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 border-t border-zinc-600"></div>
        </div>

        <p className="text-center text-gray-400">Don't have an account?</p>

        <Link to="/signup">
          <button className="mt-4 w-full cursor-pointer rounded-lg border border-emerald-500 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-600 hover:text-white">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

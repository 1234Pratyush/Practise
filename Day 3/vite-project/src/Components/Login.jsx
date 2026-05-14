import { useState } from "react";
import netflixBg from "../assets/images/netflix-bg.jpg";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={netflixBg}
        alt="Netflix Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full">
        <Header />

        <div className="flex items-center justify-center h-[82vh]">
          <div
            className="
              bg-black/75
              backdrop-blur-md
              p-4
              rounded-2xl
              w-[450px]
              border-gray-700
              shadow-2xl
            "
          >
            <h1 className="text-white text-5xl font-bold mb-10">
              {isSignForm ? "Sign In" : "Sign Up"}
            </h1>

            <form className="flex flex-col gap-6">
              {!isSignForm && (
                <div className="flex flex-col gap-2">
                  <label className="text-gray-300 text-sm">Name</label>

                  <input
                    type="text"
                    placeholder="Full name"
                    className="
                      bg-gray-800/80
                      text-white
                      px-5 py-4
                      rounded-lg
                      outline-none
                      border border-gray-600
                      focus:border-red-500
                      focus:ring-2 focus:ring-red-500/40
                      transition-all duration-300
                    "
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm">Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    bg-gray-800/80
                    text-white
                    px-5 py-4
                    rounded-lg
                    outline-none
                    border border-gray-600
                    focus:border-red-500
                    focus:ring-2 focus:ring-red-500/40
                    transition-all duration-300
                  "
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm">Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="
                    bg-gray-800/80
                    text-white
                    px-5 py-4
                    rounded-lg
                    outline-none
                    border border-gray-600
                    focus:border-red-500
                    focus:ring-2 focus:ring-red-500/40
                    transition-all duration-300
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  bg-red-600 hover:bg-red-700
                  text-white
                  py-4
                  rounded-lg
                  font-bold
                  text-lg
                  mt-3
                  shadow-lg shadow-red-900/40
                  cursor-pointer
                  transition-all duration-300
                "
              >
                {isSignForm ? "Sign in" : "Sign Up"}
              </button>

              <div className="flex items-center justify-between text-sm mt-2">
                <label className="flex items-center gap-2 text-gray-400">
                  <input type="checkbox" />
                  Remember me
                </label>

                <span className="text-gray-400 hover:text-white cursor-pointer">
                  Forgot Password?
                </span>
              </div>

              <p className="text-gray-400 mt-6 text-sm text-center">
                {isSignForm ? " New to Netflix ? " : "Already registered ? "}

                <span
                  className="
                    text-white
                    font-semibold
                    cursor-pointer
                    hover:underline
                  "
                  onClick={toggleSignInForm}
                >
                  {isSignForm ? "Sign Up Now" : "Sign in now"}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

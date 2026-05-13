import { useState } from "react";




function App() {

   const [data,setData]  = useState({
    name:'',
    email:'',
    password:'',
    gender:'',
   })


   const formSubmit = (e)=>{
           setData({
            ...data,[e.target.name]:e.target.value
           })
   }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(data)
  }



  return (


  
    <div className="min-h-screen w-full bg-gray-950 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800">
        <h1 className="text-4xl font-bold text-center mb-8">
          Registration Form
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              onChange={formSubmit}
              value={data.name}
              name="name"
              placeholder="Enter your name"
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={formSubmit}
              name="email"
              placeholder="Enter your email"
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

        
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={formSubmit}
              placeholder="Enter your password"
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

      
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Gender</label>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" onChange={formSubmit}  value="Male"/>
                Male
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" onChange={formSubmit}  value="Female"/>
                Female
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender"  onChange={formSubmit} value="Other"/>
                Other
              </label>
            </div>
          </div>

        
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 
             cursor-pointer transition-all duration-300 py-3 rounded-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

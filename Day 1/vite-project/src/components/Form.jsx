import React, {  useState } from 'react'

const Form = () => {

    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      description: "",
    });

    const [errors,setErrors] = useState({})


     const formHandler = (e)=>{
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
     }

  const submitHandler = (e)=>{
             e.preventDefault()
             setData({
               name: "",
               email: "",
               password: "",
               description: "",
             });
             console.log(data);
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-10">
      <div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col  w-70 p-2 rounded gap-2"
        >
          <input
            type="text"
            placeholder="Enter name"
            name='name'
            value={data.name}
            onChange={formHandler}
            className=" rounded p-2 bg-zinc-700 outline-none w-60"
          />
          <input
            type="email"
            placeholder="Enter email"
            value={data.email}
            name='email'
            onChange={formHandler}
            className=" rounded p-2 bg-zinc-700 outline-none w-60"
          />
          <input
            type="password"
            placeholder="Enter password"
            name='password'
            value={data.password}
            onChange={formHandler}
            className=" rounded p-2 bg-zinc-700 outline-none w-60"
          />
          <input
            type="text"
            placeholder="Enter description"
            name='description'
            value={data.description}
            onChange={formHandler}
            className=" rounded p-2 bg-zinc-700 outline-none w-60"
          />
          <button className=" w-20 rounded bg-blue-600 cursor-pointer hover:bg-blue-700 p-2 ">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form

import React, { useState } from "react";

const Form = () => {
  
    const [title,setTitle]  = useState('')
    const [description,setDescription] = useState('')

   const submitHandler  = (e)=>{
    e.preventDefault()  
    console.log(title)
    console.log(description)
    setTitle('');
    setDescription('');
   
   }

  return (
    <div className="mt-2 p-8 min-h-screen bg-zinc-900 text-white">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            className=" border-2 w-60 h-10 rounded p-2"
            placeholder="Enter notes heading"
            required    
            value={title}
            
            onChange={(e)=>setTitle(e.target.value)}

          />
          <input
            type="text"
            className="  border-2 rounded w-60 h-40 p-2 "
            placeholder="write details"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
         
           
          />
          <button className=" w-20 rounded px-2 py-2 cursor-pointer bg-blue-700">
            Submit
          </button>
        </div>
      </form>


      <div
  className="border-2 rounded bg-white w-80 h-50 mt-10 text-black"       >
     {
        title
     }

      </div>
    </div>
  );
};

export default Form;

import React from 'react'

const Card = ({item}) => {
  return (
    <div className="border  w-60 h-45 rounded flex items-center flex-col">
      <div className="h-20 w-20 rounded-full  mt-2 overflow-hidden flex items-center justify-center bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-2">
        <h2>Price : {item.price}</h2>
        <h2> Rate : {item.rating.rate}</h2>
      </div>

      <div className='flex gap-2 mt-2 mb-1'>
        <button className="border rounded p-1 bg-green-400 hover:bg-green-500 cursor-pointer">
          Add
        </button>
        <button className="border rounded p-1 bg-red-400  hover:bg-red-500 cursor-pointer">
          Remove
        </button>
      </div>
    </div>
  );
}

export default Card

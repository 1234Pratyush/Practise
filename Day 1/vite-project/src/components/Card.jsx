import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="border cursor-pointer w-60 h-45 rounded flex items-center flex-col">
        <div
          className="h-20 w-20 rounded-full  mt-2 overflow-hidden flex
       items-center justify-center bg-gray-100"
        >
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

    
      </div>
    </Link>
  );
}

export default Card

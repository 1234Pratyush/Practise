import React, { useState } from 'react'

const Counter = () => {
 const [count,setCount] = useState<number>(899)

  return (
    <div>
      <p>Cups Ordered :{count}</p>
      <button className='border px-3 py-3 rounded mt-2 cursor-pointer' onClick={()=>setCount(count + 1)}>Order One More</button>
    </div>
  )
}

export default Counter

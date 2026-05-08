import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/CartContext'

const Cart = () => {
   
  const { cart, removeFromCart, addValue,increment } = useContext(DataContext);


  return (
    <div>
      thsi is the cart page
      {cart.length == 0 ? (
        <h2 className="font-bold text-4xl">No items in the cart</h2>
      ) : (
        cart.map((items) => (
          <div className="flex gap-2">
            name :{items.title}
            <div>
              <button
                className="border px-1 rounded py-1 cursor-pointer"
                onClick={() => removeFromCart(items.id)}
              >
                Remove
              </button>
            </div>
           

            
   

       
          </div>

          
        ))
      )}

      <div className='border px-3 py-3 w-25 rounded mt-4 cursor-pointer' onClick={()=>addValue()}>
        increment
      </div>
      <div>{increment}</div>
    </div>
  );
}

export default Cart

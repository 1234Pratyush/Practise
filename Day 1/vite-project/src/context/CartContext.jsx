import React, { createContext } from 'react'
    
  export const DataContext =createContext();

const CartContext = (props) => {
  return (
    <DataContext.Provider value="Pratyush">
      {props.children}
    </DataContext.Provider>
  );
}

export default CartContext

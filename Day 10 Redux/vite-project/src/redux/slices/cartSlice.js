import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name:'cartItems',
  initialState:{
    cartItems:[]
  },
  reducers:{
    addToCart :(state,action)=>{
        state.cartItems.push(action.payload); 
    },
  }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer
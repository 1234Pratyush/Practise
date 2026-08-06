import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
     addToCart :(state,action)=>{
        state.items.push(action.payload)
     },
     removeFromCart:(state,action)=>{
        state.items.pop(action.payload)
     }
     
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name :"search"
    intialState :{
        query:'',
        activeTab:'photo'
    }
})
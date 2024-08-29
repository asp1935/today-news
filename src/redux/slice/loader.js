import { createSlice } from "@reduxjs/toolkit";

const loderSlice=createSlice({
    name:'loader',
    initialState:{
        progress:10
    },
    reducers:{
        setProgress:(state,action)=>{
            state.progress=action.payload;
        }
    }
})

export const {setProgress} =loderSlice.actions;
export default loderSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const searchQuerySlice=createSlice({
    name:'searchQuery',
    initialState:{
        query:''
    },
    reducers:{
        updateQuery(state,action){
            state.query=action.payload;
        }
    }
})
export const {updateQuery}=searchQuerySlice.actions;
export default searchQuerySlice.reducer;
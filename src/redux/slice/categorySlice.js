import { createSlice } from "@reduxjs/toolkit";


const categorySlice=createSlice({
    name:'category',
    initialState:{
      cate:'general'
    },
    reducers:{
      selectedCategory:(state,action)=>{
        state.cate=action.payload;
      }
    }
  })

  export const {selectedCategory}=categorySlice.actions;
  export default categorySlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slice/sidebarSlice";
import searchQuerySlice from "./slice/searchQuerySlice";
import categorySlice from "./slice/categorySlice";
import loader  from "./slice/loader";

export  const store=configureStore({
    reducer:{
        sidebar:sidebarSlice,
        searchQuery:searchQuerySlice,
        category:categorySlice,
        setProgress:loader
    }
})
import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        getIsMenuOpen:(state)=>{
            return state.isMenuOpen;
        },
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        }
    }

});
export const {toggleMenu,closeMenu,getIsMenuOpen} =appSlice.actions;

export default appSlice.reducer;
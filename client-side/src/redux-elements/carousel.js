import { createSlice } from "@reduxjs/toolkit";


export const carouselSlice = createSlice({
    name: "carousel",
    initialState: {activeIndex: 0, paused: false},
    reducers:
    {
       setActiveIndex: (state, action) => {
           action ?
            state.activeIndex = action.payload
            :
            state.value = state.value
       },
       setPaused: (state, action) => {
        action ?
        state.paused = action.payload
        :
        state.value = state.value
       } 
    }
});

export const { setActiveIndex, setPaused} = carouselSlice.actions

export default carouselSlice.reducer;
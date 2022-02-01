import {createSlice} from "@reduxjs/toolkit";

export const carouselSlice = createSlice({
    name: "carousel",
    //put the attributes yuo would want in the state as keys and values in the value property
    initialState: {value: {activeIndex: 0}},
    reducers: {
        setActiveIndex: (state, action) => {
            state.value = action.payload
        },
    },
});

export const {setActiveIndex} = carouselSlice.actions;

export default carouselSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ["model S", "model 3", "Model X"],
};

const carSlice = createSlice({
    name: "Car",
    initialState,  // Corrected typo here
    reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
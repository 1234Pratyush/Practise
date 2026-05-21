import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesData",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovie } = moviesSlice.actions;
export default moviesSlice.reducer;

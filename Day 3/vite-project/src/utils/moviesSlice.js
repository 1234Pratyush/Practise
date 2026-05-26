import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo :null,
    trendingMovies :null,
    upcomingMovies:null,
    topRatedMovies:null,
  },
  reducers: { 
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo :(state,action) =>{
       state.trailerVideo = action.payload
    },
    addTrendingMovies :(state,action) =>{
      state.trendingMovies = action.payload;
    },
    addUpcomingMovies :(state,action) =>{
      state.upcomingMovies = action.payload
    },
    addTopRatedMovies :(state,action) =>{
      state.topRatedMovies = action.payload
    }
  },
});

export const {
  addNowPlayingMovie,
  addTrailerVideo,
  addTrendingMovies,
  addUpcomingMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;

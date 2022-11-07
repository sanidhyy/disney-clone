import { createSlice } from "@reduxjs/toolkit";

// movie store initial state
const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

// movie slice
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

// set movies
export const { setMovies } = movieSlice.actions;

// select movies
export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosApiClient from '../api/axiosApiClient';
import { APIKey } from '../api/movieApiKey';

export const fetchMoviesOrShow = createAsyncThunk(
  "movies/fetchMoviesOrShow",
  async ({type, searchMovieText }) => {
    console.log('type...', searchMovieText, type)
    const response = await axiosApiClient.get(
      `?apiKey=${APIKey}&s=${searchMovieText}&type=${type}`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await axiosApiClient.get(`?apiKey=${APIKey}&i=${id}`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
  type: 'movie'
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchAsyncType: (state, action) => {
      console.log('payload11', action.payload)
      state.selectMovieOrShow = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    }
  },
  extraReducers: {
    [fetchMoviesOrShow.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("payload", payload);
      return { ...state, selectMovieOrShow: payload };
    },

  },
});

export const { addMovies, setType } = movieSlice.actions;


export default movieSlice.reducer;
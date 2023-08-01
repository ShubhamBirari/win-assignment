import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserDetail = createAsyncThunk(
  "users/getUserDetail",
  async () => {
    try {
      let response = await fetch("https://randomuser.me/api/");
      let data = await response.json();
      return {
        results: data.results[0],
      };
    } catch {
      alert("API failed");
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userDetail: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      state.userDetail = action?.payload?.results;
    });
  },
});

export default usersSlice.reducer;

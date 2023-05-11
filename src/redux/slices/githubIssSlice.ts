import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GithubInitialState } from "./slice.interface";

const initialState: GithubInitialState = {
  githubIssues: [],
  isLoading: false,
  isError: null,
};

export const fetchIssues = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("githubIssue/fetchIssues", async (_, thunkAPI) => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/github/hub/issues"
    );
    const data = await response.json();
    const issues = data.map((issue: { title: string }) => issue.title);
    return issues;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch issues.");
  }
});

export const githubSlice = createSlice({
  name: "githubIssue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchIssues.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.githubIssues = payload;
      })
      .addCase(fetchIssues.rejected, (state, { error }) => {
        state.isLoading = false;
        state.isError = error.message || "Something went wrong";
      });
  },
});

export default githubSlice.reducer;

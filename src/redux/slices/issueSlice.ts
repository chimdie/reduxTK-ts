import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IssueInitialState } from "./slice.interface";

const initialState: IssueInitialState = {
  issues: [],
};

export const issueSlice = createSlice({
  name: "issue",
  initialState,
  reducers: {
    addIssue: (state, { payload }: PayloadAction<string>) => {
      state.issues = [...state.issues, payload];
    },
  },
});

export const { addIssue } = issueSlice.actions;
export default issueSlice.reducer;

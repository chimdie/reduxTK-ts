import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useAppDispatchT } from "./store.types";
import issueSlice from "./slices/issueSlice";
import githubSlice from "./slices/githubIssSlice";

const store = configureStore({
  reducer: {
    issue: issueSlice,
    githubIssue: githubSlice,
  },
});

export const useAppDispatch = () => useDispatch<useAppDispatchT>();
export default store;

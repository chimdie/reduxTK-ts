import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { ProjectCard, PageLoader } from "@/components/";
import { useAppDispatch } from "@/redux/store";
import { RootState } from "@/redux/store.types";
import { addIssue } from "@/redux/slices/issueSlice";
import { fetchIssues } from "@/redux/slices/githubIssSlice";

export default function App() {
  const [textInput, setTextInput] = useState<string>("");
  const dispatch = useAppDispatch();

  const { issues } = useSelector((state: RootState) => state.issue);
  const { githubIssues, isLoading, isError } = useSelector(
    (state: RootState) => state.githubIssue
  );

  useEffect(() => {
    dispatch(fetchIssues());
  }, [dispatch]);

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const handleClick = () => {
    dispatch(addIssue(textInput));
  };

  if (isLoading) {
    return <PageLoader isLoading={isLoading} />;
  }

  if (isError) {
    return <Box>Error: {isError}</Box>;
  }

  return (
    <Box>
      <Box sx={{ mx: "5rem", my: "3rem" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Project Issue Tracker
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingY: "2rem",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h5">Add new issue</Typography>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={handleTextInputChange}
              value={textInput}
            />
            <Button variant="contained" onClick={handleClick}>
              Submit
            </Button>
          </Stack>
        </Box>
        <Box sx={{ ml: "1rem", mt: "3rem" }}>
          <Typography variant="h5">Opened issue</Typography>
          {issues.map((issue) => (
            <ProjectCard issueTitle={issue} key={issue} />
          ))}
          {githubIssues.map((issue) => (
            <ProjectCard issueTitle={issue} key={issue} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

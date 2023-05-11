import React from "react";
import { Typography, Grid, Stack, Paper, Box } from "@mui/material";

interface IProjectCard {
  issueTitle: string;
}

export default function ProjectCard({ issueTitle }: IProjectCard) {
  return (
    <Box>
      <Paper elevation={1} sx={{ p: "10px", m: "1rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Issue Title: {issueTitle}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="body1">Opened: yesterday</Typography>
                <Typography variant="body1">Priority: medium</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

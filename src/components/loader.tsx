import React, { CSSProperties } from "react";
import { Box } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";

interface IPageLoader {
  isLoading: boolean;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function PageLoader({ isLoading }: IPageLoader): JSX.Element {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      {isLoading && (
        <ClipLoader
          color="#4fa94d"
          loading={isLoading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </Box>
  );
}

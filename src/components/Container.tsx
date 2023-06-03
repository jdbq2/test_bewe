import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Container: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "45px 36px",
        overflowX: "hidden",
      }}
    >
      {children}
    </Box>
  );
};

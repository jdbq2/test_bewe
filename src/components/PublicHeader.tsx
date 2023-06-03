import { Box, useTheme } from "@mui/material";
import { FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PublicHeader: FC<Props> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "117px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        backgroundColor: theme.palette.common.white,
        boxShadow: 0,
      }}
    >
      {children}
    </Box>
  );
};

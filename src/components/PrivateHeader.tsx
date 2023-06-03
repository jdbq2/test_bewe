import { Box, Button, useTheme } from "@mui/material";

export const PrivateHeader = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        backgroundColor: theme.palette.common.white,
        boxShadow: 0,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <img src="/logo_sm.svg" alt="" />
      </Box>
      <Button
        variant="outlined"
        color="primary"
        sx={{
          fontSize: {
            xs: "11px",
            md: "15px",
          },
          width: {
            xs: "87px",
            md: "107px",
          },
          minHeight: {
            xs: "32px",
            md: "55px",
          },
        }}
      >
        LOGOUT
      </Button>
    </Box>
  );
};

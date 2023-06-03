import { Box, Button, TextField, useTheme } from "@mui/material";

export const URLForm = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          md: "40%",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "48px",
      }}
    >
      <Box
        component={"form"}
        noValidate
        autoComplete="off"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          margin="dense"
          fullWidth
          label="Url to save"
          placeholder="www.example.com"
        />
        <TextField margin="dense" fullWidth label="Name of url" />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ textTransform: "none", marginTop: "20px" }}
        >
          ADD
        </Button>
      </Box>
    </Box>
  );
};

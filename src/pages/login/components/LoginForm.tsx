import { Box, Button, TextField, Typography } from "@mui/material";

export const LoginForm = () => {
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
      }}
    >
      <Typography
        variant="h3"
        sx={{
          width: "100%",
          marginTop: "50px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Login
      </Typography>
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
          label="Your Email"
          placeholder="youremail@example.com"
        />
        <TextField margin="dense" fullWidth label="Password" type="password" />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ textTransform: "none", marginTop: "20px" }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
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
        SignUp
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
          label="Full Name"
          placeholder="Jhon Smith"
        />
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
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginTop: "15px",
            fontSize: "15px",
            width: "80%",
            "& a": {
              textDecoration: "none",
              color: theme.palette.primary.main,
            },
          }}
        >
          By Creating account You agree to the{" "}
          <Link to="/auth/privacy">Terms of use</Link> and{" "}
          <Link to="/auth/privacy">Privacy Polycy</Link>
        </Typography>
      </Box>
    </Box>
  );
};

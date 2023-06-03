import { Box, Button } from "@mui/material";
import { PublicHeader } from "../../components/PublicHeader";
import { LoginForm } from "./components/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <PublicHeader>
        <Link to="/auth/register">
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
            SIGNUP
          </Button>
        </Link>
      </PublicHeader>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          justifyContent: {
            xs: "center",
            md: "space-evenly",
          },
        }}
      >
        <img src="/logo.svg" alt="logo twoPeaks" className="logo" />
        <LoginForm />
      </Box>
    </>
  );
};

export default Login;

import { Box, Button } from "@mui/material";
import { PublicHeader } from "../../components/PublicHeader";
import { RegisterForm } from "./components/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <PublicHeader>
        <Link to="/auth/login">
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
            LOGIN
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
        <RegisterForm />
      </Box>
    </>
  );
};

export default Register;

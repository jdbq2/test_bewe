import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { UserProfileForm } from "./components/UserProfileForm";
import { UserProfileHead } from "./components/UserProfileHead";

const Profile = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Link to="/dashboard">
          <IconButton
            color={"primary"}
            size="small"
            sx={{ position: "absolute", left: "0", top: "0" }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Link>
        <Typography
          variant="h3"
          sx={{
            flex: 1,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Perfil
        </Typography>
      </Box>
      <UserProfileHead />
      <UserProfileForm />
    </>
  );
};

export default Profile;

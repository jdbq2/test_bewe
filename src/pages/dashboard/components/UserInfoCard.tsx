import { FC } from "react";
import { Box, IconButton } from "@mui/material";
import { useStore } from "../../../store/store";
import { Link } from "react-router-dom";
import { UserProfileCard } from "../../../components/UserProfileCard";
export const UserInfoCard: FC = () => {
  const { user } = useStore();
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
        position: "relative",
      }}
    >
      <Link to="/profile">
        <IconButton
          sx={{
            position: "absolute",
            right: "0",
            top: "-20%",
            "& svg": { width: "100%" },
          }}
        >
          <img src="/editar.svg" alt="" />
        </IconButton>
      </Link>
      <UserProfileCard
        image={user?.image}
        name={user?.name}
        email={user?.email}
      />
    </Box>
  );
};

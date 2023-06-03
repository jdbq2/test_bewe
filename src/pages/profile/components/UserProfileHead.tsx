import { Box } from "@mui/material";
import { UserProfileCard } from "../../../components/UserProfileCard";
import { FC } from "react";
import { useStore } from "../../../store/store";

export const UserProfileHead: FC = () => {
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
        mt: 4,
      }}
    >
      <UserProfileCard image={user?.image} name={user?.name} />
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import { useStore } from "../../store/store";
import { URLCard } from "./components/URLCard";
import { URLForm } from "./components/URLForm";
import { UserInfoCard } from "./components/UserInfoCard";

const Dashboard = () => {
  const { links } = useStore();
  return (
    <>
      <UserInfoCard />
      <URLForm />
      {links.length > 0 ? (
        <Box>
          {links.map((link) => (
            <URLCard link={link} key={link.id} />
          ))}
        </Box>
      ) : (
        <Typography
          variant="h3"
          sx={{ mt: 5, textAlign: "center" }}
          color={"primary.dark"}
        >
          ¡Guarda tu primer Link!
        </Typography>
      )}
    </>
  );
};

export default Dashboard;

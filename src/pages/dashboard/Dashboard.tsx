import { Box, Typography } from "@mui/material";
import { useStore } from "../../store/store";
import { URLCard } from "./components/URLCard";
import { URLForm } from "./components/URLForm";
import { UserInfoCard } from "./components/UserInfoCard";
import ConfirmModal from "./components/ConfirmModal";
import { useCallback, useState } from "react";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedID, setSelectedID] = useState<number | null>(null);
  const handleDelete = useCallback((linkId: number) => {
    setIsModalOpen(true);
    setSelectedID(linkId);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { links } = useStore();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        justifyContent: {
          xs: "center",
          md: "space-evenly",
        },
        alignItems: {
          xs: "center",
          md: "flex-start",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "40%",
          },
        }}
      >
        <UserInfoCard />
        <URLForm />
      </Box>
      {links.length > 0 ? (
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "40%",
            },
            mt: {
              xs: 1,
              md: 5,
            },
          }}
        >
          {links.map((link) => (
            <URLCard
              link={link}
              key={link.id}
              handleDeleteFunction={handleDelete}
            />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "40%",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{ mt: 5, textAlign: "center" }}
            color={"primary.dark"}
          >
            Save yout first Link!
          </Typography>
        </Box>
      )}
      <ConfirmModal
        isOpen={isModalOpen}
        linkID={selectedID}
        closeModalFunction={closeModal}
      />
    </Box>
  );
};

export default Dashboard;

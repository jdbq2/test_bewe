import { Box, Button, Modal, Typography } from "@mui/material";
import { useStore } from "../../../store/store";
import { linkAPI } from "../../../api/linkAPI";
import { FC } from "react";

interface Props {
  linkID: number | null;
  isOpen: boolean;
  closeModalFunction: () => void;
}

const ConfirmModal: FC<Props> = ({ linkID, isOpen, closeModalFunction }) => {
  const { deleteLink } = useStore();
  const deleteItem = async () => {
    try {
      await linkAPI.delete("/", {
        data: { id: JSON.stringify(linkID) },
      });
      if (linkID) {
        deleteLink(linkID);
      }

      closeModalFunction();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      open={isOpen}
      slotProps={{
        backdrop: {
          style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "10px",
          p: 4,
        }}
      >
        <Typography variant="h3" component="h2">
          Are you sure?
        </Typography>
        <Typography sx={{ mt: 2 }} variant="h6">
          There is no reverse for this action.
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            color={"error"}
            onClick={() => deleteItem()}
          >
            Borrar
          </Button>
          <Button
            variant="contained"
            color={"primary"}
            onClick={() => closeModalFunction()}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;

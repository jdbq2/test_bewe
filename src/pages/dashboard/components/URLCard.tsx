import { FC } from "react";
import { Link } from "../../../interfaces/link";
import { Box, Divider, IconButton, Typography } from "@mui/material";

interface Props {
  link: Link;
  handleDeleteFunction: (linkId: number) => void;
}

export const URLCard: FC<Props> = ({ link, handleDeleteFunction }) => {
  return (
    <>
      <Divider />
      <Box sx={{ width: "100%", p: 3 }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" color="primary.main">
            {link.url}
          </Typography>
          <IconButton onClick={() => handleDeleteFunction(link.id)}>
            <img src="/delete.svg" alt="delete icon" className="delete" />
          </IconButton>
        </Box>
        <Typography variant="body1" color="primary.dark" sx={{ width: "90%" }}>
          {link.name}
        </Typography>
      </Box>
    </>
  );
};

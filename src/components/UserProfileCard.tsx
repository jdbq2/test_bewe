import { FC } from "react";
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

interface Props {
  image?: string;
  name?: string;
  email?: string;
}

export const UserProfileCard: FC<Props> = ({ image, name, email }) => {
  return (
    <>
      {image ? (
        <img src={image} alt={`Imagen de ${name}`} />
      ) : (
        <PersonIcon fontSize="large" />
      )}
      <Typography
        variant="h6"
        sx={{ fontWeight: "500" }}
        color={"primary.dark"}
      >
        {name}
      </Typography>
      <Typography variant="body1" color={"primary.dark"}>
        {email}
      </Typography>
    </>
  );
};

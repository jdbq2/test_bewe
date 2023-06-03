import { FC } from "react";
import { Box, Typography } from "@mui/material";
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
        <Box
          sx={{
            width: {
              xs: "68px",
              md: "120px",
            },
            aspectRatio: "1/1",
            clipPath: "circle(50% at 50% 50%)",
            background: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mb: 2,
          }}
        ></Box>
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

import { Box, Button, TextField } from "@mui/material";
import { useStore } from "../../../store/store";
import Map from "./Map";
import { useForm } from "react-hook-form";

interface FormValues {
  location: string;
}

export const UserProfileForm = () => {
  const { address, user } = useStore();
  const { setAddress } = useStore();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      location: address,
    },
  });

  const submitFunction = (data: FormValues) => {
    setAddress(data.location);
  };

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
        mt: 3,
      }}
    >
      <Box
        onSubmit={handleSubmit(submitFunction)}
        component={"form"}
        noValidate
        autoComplete="off"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          margin="dense"
          fullWidth
          label="Name"
          placeholder="Jhon Smith"
          value={user?.name}
          disabled
        />
        <TextField
          margin="dense"
          fullWidth
          label="Your Email"
          placeholder="youremail@example.com"
          value={user?.email}
          disabled
        />
        <TextField
          margin="dense"
          fullWidth
          label="Location"
          {...register("location")}
        />
        {address !== "" && <Map address={address} />}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ textTransform: "none", marginTop: "20px" }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

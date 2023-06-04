import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { linkAPI } from "../../../api/linkAPI";
import { useStore } from "../../../store/store";

interface FormValues {
  url: string;
  name: string;
}

export const URLForm = () => {
  const { addLink } = useStore();
  const { register, handleSubmit, formState, reset } = useForm<FormValues>();
  const { errors } = formState;

  const onSubmit = async (formData: FormValues) => {
    try {
      await linkAPI.post("/add", formData);
      addLink();
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "48px",
        marginBottom: "35px",
      }}
    >
      <Box
        onSubmit={handleSubmit(onSubmit)}
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
          label="Url to save"
          placeholder="www.example.com"
          error={Boolean(errors.url)}
          helperText={errors.url?.message}
          {...register("url", {
            required: "This field is required",
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+|\b(www\.[^\s]+)\b$/,
              message: "invalid URL",
            },
          })}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Name of url"
          multiline
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
          {...register("name", {
            required: "This field is required",
          })}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ textTransform: "none", marginTop: "20px" }}
        >
          ADD
        </Button>
      </Box>
    </Box>
  );
};

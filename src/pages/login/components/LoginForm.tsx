import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { userAPI } from "../../../api/userAPI";
import { useStore } from "../../../store/store";

interface FormValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { login } = useStore();
  const { register, handleSubmit, setError, formState } = useForm<FormValues>();
  const { errors } = formState;

  const onSubmit = async (formValues: FormValues) => {
    try {
      const { data } = await userAPI.post("/login", formValues);
      if (data.message == "User not exist") {
        setError("email", {
          type: "manual",
          message: "User not exist, please SignUp",
        });
      } else if (data.message == "invalid credentials") {
        setError("password", {
          type: "manual",
          message: "invalid credentials",
        });
      } else if (data.message == "success") {
        login(data.data, data.token);
      }
    } catch (error) {
      console.log(error);
    }
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
      }}
    >
      <Typography
        variant="h3"
        sx={{
          width: "100%",
          marginTop: "50px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Login
      </Typography>
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
          label="Your Email"
          placeholder="youremail@example.com"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <TextField
          margin="dense"
          fullWidth
          label="Password"
          type="password"
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "The password must have a min of 8 characters",
            },
            maxLength: {
              value: 12,
              message: "The password must have a max of 12 characters",
            },
          })}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ textTransform: "none", marginTop: "20px" }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

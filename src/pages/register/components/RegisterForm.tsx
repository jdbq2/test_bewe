import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { userAPI } from "../../../api/userAPI";
import { useStore } from "../../../store/store";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const { signin } = useStore();
  const theme = useTheme();
  const { register, handleSubmit, setError, formState } = useForm<FormValues>();
  const { errors } = formState;

  const onSubmit = async (formValues: FormValues) => {
    try {
      const { data } = await userAPI.post("/singin", formValues);
      if (data.message == "success") {
        signin({ email: formValues.email, password: formValues.password });
      }
    } catch (error: any) {
      if (
        error.response.data.error ==
        "SQLITE_CONSTRAINT: UNIQUE constraint failed: user.email"
      ) {
        setError("email", {
          type: "manual",
          message: "User already registered, please Login",
        });
      } else {
        console.log(error);
      }
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
        SignUp
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
          label="Full Name"
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "The name must have a min of 3 characters",
            },
            maxLength: {
              value: 12,
              message: "The password must have a max of 12 characters",
            },
          })}
        />
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
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginTop: "15px",
            fontSize: "15px",
            width: "80%",
            "& a": {
              textDecoration: "none",
              color: theme.palette.primary.main,
            },
          }}
        >
          By Creating account You agree to the{" "}
          <Link to="/auth/privacy">Terms of use</Link> and{" "}
          <Link to="/auth/privacy">Privacy Polycy</Link>
        </Typography>
      </Box>
    </Box>
  );
};

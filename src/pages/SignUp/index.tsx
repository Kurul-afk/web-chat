import React from "react";
import { Controller, useForm } from "react-hook-form";
import "./style.css";
import logo from "../../img/Logo-purple.svg";
import { TextField } from "@mui/material";

const SignUp = () => {
  const {
    handleSubmit,
    watch,
    register,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("Submited!");
  };

  const pwd = watch("password");

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <div className="sign-up__header">
          <img src={logo} className="sign-up__img" alt="img" />
          <h1 className="sign-up__title">Sign up</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            rules={{ required: "Email is required!" }}
            render={({ field }) => (
              <TextField
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message?.toString()}
                {...field}
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: "Password is required!" }}
            render={({ field }) => (
              <TextField
                label="Password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message?.toString()}
                {...field}
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="password_repeat"
            rules={{
              required: "Second password is required!",
              validate: (value) => value == pwd || "Password is mismatch!",
            }}
            render={({ field }) => (
              <TextField
                label="Password repeat"
                variant="outlined"
                error={!!errors.password_repeat}
                helperText={errors.password_repeat?.message?.toString()}
                {...field}
                type="text"
              />
            )}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

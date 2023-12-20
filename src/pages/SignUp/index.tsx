import React from "react";
import { Controller, useForm } from "react-hook-form";
import "./style.css";
import logo from "../../img/Logo-purple.svg";
import googleIcom from "../../img/google-icon.svg";
import { TextField } from "@mui/material";

const SignUp = () => {
  const {
    handleSubmit,
    watch,
    register,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
  };

  const SignByGoogle = () => {
    console.log("Google");
  };

  const pwd = watch("password");

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <div className="sign-up__header">
          <img src={logo} className="sign-up__img" alt="img" />
          <h1 className="sign-up__title">Sign up</h1>
        </div>
        <form className="sign-up__form" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("email", {
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered value does not match email format",
                  },
                })}
                {...field}
                type="text"
                className="sign-up__input"
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
                className="sign-up__input"
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
                className="sign-up__input"
              />
            )}
          />
          <button className="sign-up__btn" type="submit">
            Submit
          </button>
        </form>
        <div className="sign-up__socials">
          <button
            className="sign-up__google-btn"
            onClick={() => SignByGoogle()}
          >
            Login with Google{" "}
            <img src={googleIcom} className="google_icon" alt="logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

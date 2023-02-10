import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import LayoutAuthentication from "layout/LayoutAuthentication";
import { Button, ButtonGoogle } from "components/button";
import { Label } from "components/label";
import { Input } from "components/input";
import { Checkbox } from "components/checkbox";
import useToggleValue from "hooks/useToggleValue";
import IconEyeToggle from "components/icons/IconEyeToggle";
import { useDispatch } from "react-redux";
import { authRegister } from "store/auth/auth-slice";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character")
    .required("This field is required"),
});

const RegisterPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const dispatch = useDispatch();
  const handleSignUp = async (values) => {
    if (!acceptTerm) return null;
    try {
      dispatch(authRegister({ ...values, permissions: [] }));
      reset({});
    } catch (error) {
      console.log(error);
    }
  };
  const { value: showPassword, handleToggleValue: handleToggleShowPassword } =
    useToggleValue();
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();

  useEffect(() => {
    document.title = "Register";
  }, []);
  return (
    <LayoutAuthentication heading="Register">
      <p className="text-xs font-normal text-center lg:text-sm text-text3 mb-25px lg:mb-30px">
        Already have an account?{" "}
        <Link to="/login" className="font-medium underline text-primary">
          Login
        </Link>
      </p>
      <ButtonGoogle></ButtonGoogle>
      <p className="text-xs text-center lg:text-sm text-text2 dark:text-white mb-15px lg:mb-30px">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="flex flex-col gap-y-10px mb-15px lg:mb-5">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            placeholder="Jhon Doe"
            name="name"
            error={errors?.name?.message}
          ></Input>
        </div>
        <div className="flex flex-col gap-y-10px mb-15px lg:mb-5">
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            type="email"
            name="email"
            placeholder="example@gmail.com"
            error={errors?.email?.message}
          ></Input>
        </div>
        <div className="flex flex-col gap-y-10px mb-15px lg:mb-5">
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a password"
            error={errors?.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleToggleShowPassword}
            ></IconEyeToggle>
          </Input>
        </div>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox
            control={control}
            name="term"
            checked={acceptTerm}
            onClick={handleToggleTerm}
          >
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="text-secondary lg:underline">Terms of Use</span>{" "}
              and have read and understand the{" "}
              <span className="text-secondary lg:underline">
                Privacy policy.
              </span>
            </p>
          </Checkbox>
        </div>

        <Button type="submit" className="w-full" kind="primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default RegisterPage;

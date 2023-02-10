import React, { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useToggleValue from "hooks/useToggleValue";
import LayoutAuthentication from "layout/LayoutAuthentication";
import { Button, ButtonGoogle } from "components/button";
import { Label } from "components/label";
import { Input } from "components/input";
import IconEyeToggle from "components/icons/IconEyeToggle";
import { useDispatch } from "react-redux";
import { authLogin } from "store/auth/auth-slice";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Invaild email"),
  password: yup.string().required("Incorrect password"),
});
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: showPassword, handleToggleValue: handleToggleShowPassword } =
    useToggleValue(false);

  const dispatch = useDispatch();
  const handleSignIn = (values) => {
    if (!isValid) return null;
    try {
      dispatch(authLogin(values));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Lgoin";
  }, []);
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="text-xs font-normal text-center lg:text-sm text-text3 mb-25px lg:mb-30px">
        Dont have an account?{" "}
        <Link to="/register" className="font-medium underline text-primary">
          Register
        </Link>
      </p>
      <ButtonGoogle
        text="Sign in with google"
        className="mb-30px"
      ></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
            placeholder="Enter Password"
            error={errors?.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleToggleShowPassword}
            ></IconEyeToggle>
          </Input>
        </div>

        <div className="flex justify-end mb-5 text-sm font-medium text-primary">
          Forgot password
        </div>

        <Button
          type="submit"
          className="w-full"
          isLoading={isSubmitting}
          kind="primary"
        >
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;

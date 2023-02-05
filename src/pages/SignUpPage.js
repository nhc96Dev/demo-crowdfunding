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
  term: yup
    .boolean()
    .required("The terms and  Privacy policy must be accepted")
    .oneOf([true], "The terms and  Privacy policy must be accepted"),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      term: false,
    },
  });

  const watchTerm = watch("term");
  const handleToggleTerm = () => {
    setValue("term", !watchTerm);
  };

  const { value: showPassword, handleToggleValue: handleToggleShowPassword } =
    useToggleValue(false);

  const handleSignUp = (values) => {
    if (!isValid) return null;
    console.log("handleSignUp ~ values", values);
  };
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="text-xs font-normal text-center lg:text-sm text-text3 mb-25px lg:mb-30px">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
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
            checked={watchTerm === true}
            onClick={handleToggleTerm}
          >
            <p
              className={`flex-1 text-xs lg:text-sm   ${
                errors?.term?.message
                  ? "text-error"
                  : "text-text2 dark:text-text3"
              }`}
            >
              I agree to the{" "}
              <span className="text-secondary lg:underline">Terms of Use</span>{" "}
              and have read and understand the{" "}
              <span className="text-secondary lg:underline">
                Privacy policy.
              </span>
            </p>
          </Checkbox>
        </div>

        <Button
          type="submit"
          className="w-full"
          isLoading={isSubmitting}
          kind="primary"
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;

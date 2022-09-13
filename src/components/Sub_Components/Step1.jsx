import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { ProgressContext } from "../../Context/ProgressContext";

const Step1 = () => {
  const navigate = useNavigate();

  const { handleChange } = useContext(ProgressContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Step 1 Completed");
    navigate("/step2");
    handleChange(30);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        {...register("firstName", {
          required: true,
        })}
      />
      {errors?.firstName?.type === "required" && <p>Enter First Name</p>}
      <label>Last Name</label>
      <input
        {...register("lastName", {
          required: true,
        })}
      />
      {errors?.firstName?.type === "required" && <p>Enter Last Name</p>}
      <label>Email</label>a
      <input
        type="email"
        {...register("mail", {
          required: true,
          pattern: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
        })}
      />
      {errors?.mail?.type === "required" && <p>Enter email address</p>}
      {errors?.mail?.type === "pattern" && <p>Invalid email format”</p>}
      <input type="submit" value="Next" />
    </form>
  );
};

export default Step1;

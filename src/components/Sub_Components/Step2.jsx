import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Styles from "./Form.module.css";
import { ProgressContext } from "../../Context/ProgressContext";

const Step2 = () => {
  const navigate = useNavigate();

  const { handleChange } = useContext(ProgressContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Step 2 Completed");
    navigate("/step3");
    handleChange(65)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Gender</label>
      <select
        {...register("gender", {
          required: true,
        })}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        {errors?.gender?.type === "required" && <p>Select gender type</p>}
      </select>
      <label>Occupation</label>
      <input
        {...register("occupation", {
          required: true,
        })}
      />
      {errors?.occupation?.type === "required" && <p>Enter occupation</p>}
      <label>Date of Birth</label>
      <input
        type="date"
        {...register("bod", {
          required: true,
        })}
      />
      {errors?.bod?.type === "required" && <p>Select date of birth</p>}
      <button className={Styles.btn} onClick={() => navigate("/")}>
        Previous
      </button>
      <input type="submit" value="Next" />
    </form>
  );
};

export default Step2;

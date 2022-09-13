import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Styles from "./Form.module.css";
import { ProgressContext } from "../../Context/ProgressContext";

const Step3 = () => {
  const navigate = useNavigate();

  const { handleChange } = useContext(ProgressContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Form Submitted");
    navigate("/step2");
    handleChange(100);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Contact Number</label>
      <input {...register("contact", { required: true, maxLength: 10 })}/>
      {errors?.contact?.type === "required" && <p>Enter Contact Number</p>}
      {errors?.contact?.type === "maxLength" && <p>Enter 10 Digit Number</p>}
      <label>Address</label>
      <input
        {...register("address", {
          required: true,
        })}
      />
      {errors?.address?.type === "required" && <p>Enter Address</p>}
      <label>City</label>a
      <input
        {...register("city", {
          required: false,
        })}
      />
      <label>State</label>a
      <input
        {...register("state", {
          required: false,
        })}
      />
      <button className={Styles.btn} onClick={() => navigate("/step2")}>
        Previous
      </button>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Step3;

import React, { useContext } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { ProgressContext } from "../Context/ProgressContext";

const Progress = () => {
  const { progress } = useContext(ProgressContext);

  console.log(progress)

  return <ProgressBar completed={progress} />;
};

export default Progress;

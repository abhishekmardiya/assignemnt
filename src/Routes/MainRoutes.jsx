import React from "react";
import { Route, Routes } from "react-router";
import Step1 from "../components/Sub_Components/Step1";
import Step2 from "../components/Sub_Components/Step2";
import Step3 from "../components/Sub_Components/Step3";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Step1 />}></Route>
        <Route path="/step2" element={<Step2 />}></Route>
        <Route path="/step3" element={<Step3 />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;

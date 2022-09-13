import React, { useState } from "react";
import { createContext } from "react";

export const ProgressContext = createContext();

function ProgressContextProvider({ children }) {
  const [progress, setProgress] = useState(0);

  const handleChange = (value) => {
    setProgress(value);
  };

  return (
    <ProgressContext.Provider value={{ progress, handleChange }}>
      {children}
    </ProgressContext.Provider>
  );
}

export default ProgressContextProvider;

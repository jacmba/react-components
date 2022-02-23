import { useState } from "react";

const useTheme = (startingTheme = "light") => {
  const [theme, setTheme] = useState(startingTheme);

  const validateTheme = (theme) => {
    if (theme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return [theme, validateTheme];
};

export default useTheme;

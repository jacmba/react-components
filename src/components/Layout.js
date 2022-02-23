import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const Layout = ({ startingTheme, children }) => {
  const [theme, setTheme] = useState(startingTheme);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <div className={`container-fluid ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default Layout;

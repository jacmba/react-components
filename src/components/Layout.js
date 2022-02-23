import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";

const Layout = ({ startingTheme, children }) => (
  <ThemeProvider startingTheme={startingTheme}>
    <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
  </ThemeProvider>
);

const LayoutNoThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={`container-fluid ${theme}`}>{children}</div>;
};

export default Layout;

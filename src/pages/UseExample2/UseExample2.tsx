import { Button } from "antd";
import Title from "antd/es/typography/Title";
import React, { createContext, PropsWithChildren, use, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme => (theme === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const themeContextValue = use(ThemeContext);

  if (!themeContextValue) {
    throw new Error("Please wrap component with in the theme provider");
  }

  return themeContextValue;
};

const ThemeExample = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Title level={5}>Current Theme :{theme}</Title>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </div>
  );
};

const UseExample2 = () => {
  return (
    <ThemeProvider>
      <Title>use() Example (context)</Title>
      <ThemeExample />
    </ThemeProvider>
  );
};

export default UseExample2;

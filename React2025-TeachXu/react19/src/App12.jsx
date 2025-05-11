/* eslint-disable no-unused-vars */
import { createContext, useContext, use } from "react";

const ThemeContext = createContext("light");

function Child() {
  // const theme = useContext(ThemeContext);
  const theme = use(ThemeContext);
  return (
    <div
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      Child component with theme: {theme}
    </div>
  );
}

function App() {
    return (
      <ThemeContext.Provider value="dark">
        <div>
          <h1>App Component</h1>
          <Child />
        </div>
      </ThemeContext.Provider>
    );
}

export default App;
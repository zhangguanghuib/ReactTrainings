import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Child() {
  const theme = useContext(ThemeContext);
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
      <ThemeContext.Provider value="light">
        <div>
          <h1>App Component</h1>
          <Child />
        </div>
      </ThemeContext.Provider>
    );
}

export default App;

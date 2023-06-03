import ThemeContext from "./context/ThemeContext";
import Router from "./router/Router";

const App = () => {
  return (
    <ThemeContext>
      <Router />
    </ThemeContext>
  );
};

export default App;

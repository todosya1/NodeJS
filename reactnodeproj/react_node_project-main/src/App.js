import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./components/MyRoutes/MyRoutes";
import "./App.css";



/**
 * The main application component.
 * @returns {React.ReactElement} The JSX element.
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;

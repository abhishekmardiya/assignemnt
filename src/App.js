import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import MainRoutes from "./Routes/MainRoutes";
import Progress from "./components/ProgressBar";

function App() {
  return (
    <div className="App">
      <br />
      <Progress/>
      <hr />
      <MainRoutes />
    </div>
  );
}

export default App;

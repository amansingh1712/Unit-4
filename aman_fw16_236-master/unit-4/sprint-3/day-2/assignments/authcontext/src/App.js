import "./styles.css";
import NavBar from "./components/NavBar";
import LogStatus from "./components/LogStatus";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <LogStatus />
    </div>
  );
}
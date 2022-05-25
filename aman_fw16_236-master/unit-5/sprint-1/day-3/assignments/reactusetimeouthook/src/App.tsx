import "./styles.css";
import { useTimeout } from "./hooks/useTimeout";

export default function App() {
  const { ready } = useTimeout(5000);

  return (
    <div className="App">
      {ready ? (
        <h1 style={{ color: "blue" }}>Ready</h1>
      ) : (
        <h1>Loading... (in 5 sec)</h1>
      )}
    </div>
  );
}
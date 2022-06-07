import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const getData = () => {
    axios.get("http://localhost:8080/counter").then(({ data }) => {
      setCount(data.value);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App" id="main">
      <h3 className="counter-value">count is: {count}</h3>
      <header className="App-header">
        <button
          className="counter-btn"
          type="button"
          onClick={() => {
            axios
              .post("http://localhost:8080/counter", {
                value: count + 1,
              })
              .then(() => {
                setCount(count + 1);
              });
          }}
        >
          count is: {count}
        </button>

        <button>Add Count</button>
      </header>
    </div>
  );
}

export default App;

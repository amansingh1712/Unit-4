import "./styles.css";
import { useMergeState } from "./hooks/useMergeState";

// styles
const flexDiv = {
  display: "flex",
  marginBottom: "10px"
};

const formStyles = {
  margin: "auto",
  width: "fit-content",
  padding: "10px",
  border: "1px solid lightgray"
};

const labelDiv = {
  width: "100px"
};
// styles ends

const initState = {
  username: "",
  email: "",
  password: ""
};

export default function App() {
  const { data: state, setState } = useMergeState(initState);
  console.log(state);
  return (
    <div className="App">
      <form style={formStyles}>
        <div style={flexDiv}>
          <div style={labelDiv}>Username: </div>
          <div>
            <input
              type="text"
              placeholder="Enter your username here"
              onChange={(e) => setState({ username: e.target.value })}
            />
          </div>
        </div>
        <div style={flexDiv}>
          <div style={labelDiv}>Email: </div>
          <div>
            <input
              type="text"
              placeholder="Enter your username here"
              onChange={(e) => setState({ email: e.target.value })}
            />
          </div>
        </div>
        <div style={flexDiv}>
          <div style={labelDiv}>Password: </div>
          <div>
            <input
              type="text"
              placeholder="Enter your username here"
              onChange={(e) => setState({ password: e.target.value })}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
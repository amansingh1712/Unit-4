import React from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import { Status } from "./LogStatus.styled";

const LogStatus = () => {
  const { isAuth } = React.useContext(AuthContext);
  const [token, setToken] = React.useState("");

  const post = async () => {
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }),
      });
      let data = await res.json();
      console.log(data);
      setToken(data.token);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    post();
  }, [token]);

  return (
    <>
      <div style={{ marginTop: "25px" }}>
        <span>Status: </span>
        <Status color={isAuth}>{`${
          isAuth ? "Login successfull" : "Logout successfull"
        }`}</Status>
      </div>
      <div>{`Token: ${isAuth ? token : "null"}`}</div>
    </>
  );
};

export default LogStatus;

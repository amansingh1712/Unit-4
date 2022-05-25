import { useNavigate, useParams } from "react-router-dom";

type ID = {
  id: any;
};

export const Country = () => {
  let { id } = useParams<ID>();
  id = id.split("-");

  const navigate = useNavigate();
  return (
    <div
      style={{
        margin: "auto",
        width: "fit-content",
        textAlign: "center",
        fontFamily: "sans-serif"
      }}
    >
      <button onClick={() => navigate("/")}>Back</button>
      <h1>Country: {id[0]}</h1>
      <h2>City: {id[1]}</h2>
    </div>
  );
};
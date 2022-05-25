import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { useDebouncedCallback } from "@react-hookz/web";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:8080/country";

export const Search = () => {
  const [text, setText] = useState("");
  const { loading, data, error } = useFetch(URL, {
    q: text || "",
    _limit: 5
  });

  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <h3>Search country</h3>
        <input
          onChange={useDebouncedCallback(
            (e) => setText(e.target.value),
            [],
            1000,
            0
          )}
          type="text"
          placeholder="Enter country name here"
        />
        <div>
          {data.map((item) => (
            <div
              onClick={() =>
                navigate(`/country/${item.country + "-" + item.city}`)
              }
              className="countryDivs"
              key={item.city}
            >
              {item.country}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>Status</h3>
        {loading ? (
          <h4 style={{ color: "gray" }}>Loading...</h4>
        ) : error ? (
          <h4 style={{ color: "red" }}>Something went wrong</h4>
        ) : (
          <h4 style={{ color: "green" }}>Data fetched successfully</h4>
        )}
      </div>
    </div>
  );
};
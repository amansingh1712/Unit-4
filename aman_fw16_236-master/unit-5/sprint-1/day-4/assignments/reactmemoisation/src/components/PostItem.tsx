import React, { useEffect, useState } from "react";
import { PostType } from "../App";

const color = ["yellow", "blue", "orange", "red"];

type ToggleVerifyType = {
  toggleVerify: (s: string) => void;
};

type IdxType = {
  idx: number;
};

export const PostItem = (d: PostType & ToggleVerifyType & IdxType) => {
  const { id, title, body, verifyPost } = d;
  const { toggleVerify } = d;
  const { idx } = d;
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    let id = setTimeout(() => {
      setDelay(true);
    }, 2000);
    return () => clearTimeout(id);
  }, [id]);

  return (
    <div
      style={{
        padding: "25px",
        border: "1px solid black",
        width: "fit-content",
        margin: "auto",
        marginBottom: "15px"
      }}
    >
      <div style={{ display: "flex", width: "300px", marginBottom: "25px" }}>
        {delay ? (
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: color[idx % 4],
              border: "1px solid green"
            }}
          ></div>
        ) : (
          <div
            style={{ width: "50px", height: "50px", border: "1px solid green" }}
          ></div>
        )}
        <div style={{ textAlign: "left" }}>
          <div style={{ margin: "5px" }}>
            <b>Title: </b>
            {title}
          </div>
          <div style={{ margin: "5px" }}>
            <b>Body: </b>
            {body}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          onClick={() => toggleVerify(id)}
          style={{
            fontSize: "20px",
            border: "1px solid black",
            width: "fit-content",
            padding: "3px 7px",
            cursor: "pointer"
          }}
        >
          Verify
        </div>
        <div style={{ color: "green" }}>{verifyPost ? "Verified" : ""}</div>
      </div>
    </div>
  );
};

export const MemoPostItem = React.memo(PostItem);
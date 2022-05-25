import { useCallback, useEffect, useRef, useState } from "react";
import { MemoPostItem } from "./components/PostItem";
import { v4 as uuid } from "uuid";
import "./styles.css";

export type PostType = {
  id: string;
  title: string;
  body: string;
  verifyPost: boolean;
};

export default function App() {
  const [count, setCount] = useState(0);
  const countRef: any = useRef();
  //console.log("UI re-rendering");
  useEffect(() => {
    countRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      //console.log("inside cleanup");
      return clearInterval(countRef.current);
    };
  }, []);
  //console.log(countRef);

  const [posts, setPosts] = useState<PostType[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAdd = () => {
    const payload: PostType = {
      id: uuid(),
      title,
      body,
      verifyPost: false
    };
    setPosts([...posts, payload]);
    setTitle("");
    setBody("");
  };

  const toggleVerify = (id: string) => {
    setPosts(
      posts.map((item) =>
        item.id === id ? { ...item, verifyPost: !item.verifyPost } : { ...item }
      )
    );
  };

  const callBack = useCallback(toggleVerify, [posts]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          border: "1px solid black",
          width: "fit-content",
          marginBottom: "25px"
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ height: "25px", width: "300px" }}
            type="text"
            placeholder="Enter title here"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ height: "200px", width: "300px" }}
            placeholder="Enter body here"
          />
        </div>
        <div
          onClick={handleAdd}
          style={{
            fontSize: "20px",
            border: "1px solid black",
            width: "fit-content",
            padding: "3px 7px",
            marginLeft: "250px",
            cursor: "pointer"
          }}
        >
          ADD
        </div>
      </div>
      {posts.map((item, idx) => {
        return (
          <MemoPostItem
            key={item.id}
            {...item}
            idx={idx}
            toggleVerify={callBack}
          />
        );
      })}
    </div>
  );
}
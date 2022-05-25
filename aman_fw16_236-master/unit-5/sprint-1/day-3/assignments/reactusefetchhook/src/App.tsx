import "./styles.css";
import { useFetch } from "./hooks/useFetch";

const URL = "https://fakestoreapi.com/products/";

export type Product = {
  id: number;
  title: string;
};

export default function App() {
  const { loading, data, error } = useFetch(URL);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        data.map((item) => {
          return (
            <p key={item.id}>
              {item.id}. {item.title}
            </p>
          );
        })
      )}
    </div>
  );
}
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { Country } from "./pages/Country";
import { Search } from "./pages/Search";

export type Item = {
  country: string;
  city: string;
};

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </>
  );
}
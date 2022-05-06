import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./contexts/AuthContextProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
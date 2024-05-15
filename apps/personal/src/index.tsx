import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { StrictMode } from "react";

const el = document.getElementById("root");
if (el) {
  const root = createRoot(el);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  throw new Error("Could not find root element");
}

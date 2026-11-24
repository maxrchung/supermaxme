import { render } from "@solidjs/web";
import App from "./App";
import "./reset.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element #root not found");
}

render(() => <App />, root);

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// CSS
import "./index.css";

// render whole app
createRoot(document.getElementById("root")).render(<App />);

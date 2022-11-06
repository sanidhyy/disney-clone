import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store";

import App from "./App";

// CSS
import "./index.css";

// render whole app
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

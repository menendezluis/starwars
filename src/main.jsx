import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "./routes/routes";
import { store } from "./store";
import Data from "./Data";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Data>
        <RouterProvider router={routes} />
      </Data>
    </Provider>
  </React.StrictMode>
);

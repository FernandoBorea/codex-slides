import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/geist";
// Base styles load before the router so deck and kit CSS can override them.
import "./styles.css";
import "./decks/slides.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

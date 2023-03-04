import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Routers/routers";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Routers />);

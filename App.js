
import React from "react";
import ReactDOM from "react-dom/client";

const root = React.createElement("h1",{id:"heading"},"Hello React");

    const Id = ReactDOM.createRoot(document.getElementById("root"));
    Id.render(root);
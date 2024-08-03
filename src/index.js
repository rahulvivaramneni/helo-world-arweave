import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Hello, I am a very basic React app!</h1>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

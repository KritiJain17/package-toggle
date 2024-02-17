import logo from "./logo.svg";
import "./App.css";
import { ToggleButton } from "package-toggle";
import React from "react";
// import { ToggleButton } from "./lib/index";
function App() {
  return (
    <div>
      <ToggleButton isToggleExternallyControlled={false} />
    </div>
  );
}

export default App;

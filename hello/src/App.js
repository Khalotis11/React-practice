import React from "react";
import "./App.css";

import { HelloWorld } from "./components/HelloWorld";
import { Logo } from "./components/logo";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <HelloWorld />
        <Button />
      </header>
    </div>
  );
}

export default App;

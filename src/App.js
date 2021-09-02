import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Marina Momčilov</small>
        </footer>
      </div>
    </div>
  );
}

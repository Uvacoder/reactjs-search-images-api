import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
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

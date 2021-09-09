import React from "react";
import "./layouts/App.css";
import Dictionary from "./components/Dictionary";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="mountain" />
        </main>
        <footer className="App-footer">
          <small>Coded by Marina Momčilov</small>
        </footer>
      </div>
    </div>
  );
}

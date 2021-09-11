import React from "react";
import "./layouts/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";

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
        <Footer />
      </div>
    </div>
  );
}

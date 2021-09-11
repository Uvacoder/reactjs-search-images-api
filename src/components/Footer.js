import React from "react";
import "../layouts/Footer.css"

export default function Footer() {
  return (
    <footer className="Footer">
      <small>
        <a
          href="https://github.com/Marina-sky/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://amazing-minsky-57ce6d.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Marina Momčilov
        </a>
      </small>
    </footer>
  );
}

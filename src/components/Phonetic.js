import React from "react";
import "../layouts/Phonetic.css";

export default function Phonetic(props) {
    return (
        <div className="Phonetic">
            <span className="text">{props.phonetic.text}</span>
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">🔉 Listen</a>
        </div>
    );
}
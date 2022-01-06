import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyma";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition mb-3">{definition.definition}</div>
            <div className="example">{definition.example}</div>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

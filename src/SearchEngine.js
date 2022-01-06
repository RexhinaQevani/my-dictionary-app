import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("dictionary");
  const [definitions, setDefinitions] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinitions(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="SearchEngine">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter word"
              className="form-control mb-2"
              onChange={handleKeywordChange}
            />
            <input type="submit" value="Search" className="btn" />
          </form>
        </section>
        <Results results={definitions} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

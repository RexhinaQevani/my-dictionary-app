import React, { useState } from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the word ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter word"
          className="form-control mb-3"
          onChange={handleKeywordChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-secondary mb-3 w-80"
        />
      </form>
    </div>
  );
}

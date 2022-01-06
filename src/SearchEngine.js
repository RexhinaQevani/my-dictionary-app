import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("dictionary");
  const [definitions, setDefinitions] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setDefinitions(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001d74e99dea4804faabcbcfeaadf936a20";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
              placeholder="Enter a word"
              className="form-control mb-2"
              onChange={handleKeywordChange}
            />
            <input type="submit" value="Search" className="btn" />
          </form>
        </section>
        <Results results={definitions} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}

//documentation: https://dictionaryapp.dev/e
//pexels api key 563492ad6f91700001000001d74e99dea4804faabcbcfeaadf936a20

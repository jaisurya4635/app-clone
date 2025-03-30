import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./GoogleClone.css";

const GoogleClone = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    const apiUrl = `https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CX&q=${query}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setResults(data.items || []);
  };

  return (
    <div className="container">
      <h1 className="title">Google Clone</h1>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Search Google..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
          <FaSearch />
        </button>
      </form>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <a
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              className="result-title"
            >
              {result.title}
            </a>
            <p className="result-snippet">{result.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleClone;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = (props) => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [formIndex, setFormIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/search?q=${query}&page=${page}`);
      setResults(data.results);
      setTotalCount(data.meta.totalCount);
    };

    if (query !== "") {
      fetchData();
    } else {
      setResults([]);
    }

  }, [query, page]);

  useEffect((props, query, totalCount) => {
    if (props.account) {
      const filteredResults = results.filter(
        (result) => result.account_id === props.account
      );
      props.search(filteredResults, query, filteredResults.length);
      setResults(filteredResults);
      setTotalCount(filteredResults.length);
    } else {
        props.search(results, query, totalCount);
    }
  }, [results, props.account]);

  const handleInput = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
    search();
  }
  };

  const search = () => {
    if (query !== "") {
      setPage(1);
    } else {
      setResults([]);
      props.search(results, query);
    }
  };

  const nextPage = () => {
  setPage(page + 1);
  };

  const makeFormIndex = (index) => {
  setFormIndex(index);
  };

  return (
  <div className="search-component">
    <input
        type="text"
        onChange={handleInput}
        value={query}
        onKeyDown={handleKeyDown}
        placeholder="Search for a transaction"
      />
    <button className="search-button" onClick={search}>
      Search
    </button>
  </div>
  );
};

export default Search;
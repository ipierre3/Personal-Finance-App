import React, { useState, useEffect } from "react";
import SearchUtil from "../../utils/SearchUtil";

const Search = ({ account, search }) => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  
  useEffect(() => {
    const fetchResults = async () => {
      const response = await SearchUtil.search(query, page);
      setResults(response.results);
      setTotalCount(response.totalCount);
    };
    if (query !== "") {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [query, page]);
  
  useEffect(() => {
    if (account) {
      const filteredResults = results.filter(
        (result) => result.account_id === account
      );
      search(filteredResults, query, filteredResults.length);
      setResults(filteredResults);
      setTotalCount(filteredResults.length);
    } else {
      search(results, query, totalCount);
    }
  }, [results, account, search, query, totalCount]);
  
  const handleInput = (e) => {
    setQuery(e.currentTarget.value);
  };
  
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
    setQuery(e.currentTarget.value);
  }
  };
  
  const nextPage = () => {
    setPage(page + 1);
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
    <button className="search-button" onClick={() => setQuery(query)}>
      Search
    </button>
  </div>
  );
};
  
export default Search;

// const [formIndex, setFormIndex] = useState(null);
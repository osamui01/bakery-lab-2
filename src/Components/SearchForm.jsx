import { useState } from "react";

const SearchForm = ({ cakes }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    const filteredCakes = cakes.filter((cake) =>
      cake.cakeName.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filteredCakes);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for cakes..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <input type="Submit" />
      </form>
      <ul>
        {results.map((cake, index) => (
          <li key={index}>
            <p>{cake.cakeName}</p>
            <p>{cake.ingredients}</p>
            <p>{cake.rating}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchForm;

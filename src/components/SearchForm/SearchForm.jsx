import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query');
  const [searchMovie, setSearchMovie] = useState(queryParam);

  const onInputChange = e => {
    setSearchMovie(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const query = searchMovie.trim().toLowerCase();

    if (!query) {
      alert('enter something');
      return;
    }
    setSearchParams({ query });
    onSubmit(query);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="search for a movie"
        value={searchMovie}
        onChange={onInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

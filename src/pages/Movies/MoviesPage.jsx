import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// import searchMovie from 'services/moviesApi'
import { fetchSearchMovies } from 'services/moviesApi';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    fetchSearchMovies(query).then(data => setMovies(data.results));
  }, [query]);

  const handleSearch = query => {
    fetchSearchMovies(query).then(data => setMovies(data.results));
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/moviesApi';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrending().then(movies => {
      setMovies(movies.results);
    });
  }, []);

  return (
    <div>
      <ul>
        {movies.map(({ title, poster_path, id }) => {
          return (
            <li key={id}>
              <Link>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;

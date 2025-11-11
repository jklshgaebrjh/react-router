import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from 'services/moviesApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading movie</p>;

  return (
    <div>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>rationg: {movie.vote_average}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;

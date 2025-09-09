import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from 'services/moviesApi';
import { Container, Item, List, Title, Image } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrending().then(movies => {
      setMovies(movies.results);
    });
  }, []);

  return (
    <Container>
      <List>
        {movies.map(({ title, poster_path, id }) => {
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`}>
                <Image src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
                <Title>{title}</Title>
              </Link>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default HomePage;

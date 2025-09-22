import { fetchCast } from 'services/moviesApi';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Item, List, Title, Text, Image } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <Container>
      <Title>CAST</Title>
      <List>
        {cast.map(({ cast_id, name, character, profile_path }) => (
          <Item key={cast_id}>
            {
              <Image
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt=""
              />
            }
            <Text>{name}</Text>
            <Text>{character}</Text>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Cast;

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/Movies/MoviesPage'; 
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav/Nav';
import MovieDetails from 'pages/MovieDetails/MovieDetails'
import Cast from './Cast/Cast'
import Reviews from './Reviews/Reviews'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path='movies/:movieId' element={<MovieDetails/>}>
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

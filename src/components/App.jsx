import Nav from './Nav/Nav';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// import HomePage from 'pages/HomePage/HomePage';
// import MoviesPage from 'pages/Movies/MoviesPage'; 
// import MovieDetails from 'pages/MovieDetails/MovieDetails'
// import Cast from './Cast/Cast'
// import Reviews from './Reviews/Reviews'

const HomePage = lazy(() => import('pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'))
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))

export const App = () => {
  return (
    <Suspense fallback={<div>Loading site</div>}>
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
    </Suspense>
  );
};

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/Movies/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav/Nav';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Route>
      </Routes>
    </div>
  );
};

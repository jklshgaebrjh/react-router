import HomePage from "pages/HomePage/HomePage";
import MoviesPage from "pages/Movies/MoviesPage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
      </Routes>
    </div>
  );
};

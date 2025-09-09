import SearchForm from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchMovie from 'services/moviesApi'

const MoviesPage = () => {
    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [searchParams, useSearchParams] = useSearchParams()
    const [ filter, setFilter] = useState('')
    const queryValue = setSearchParams.get('query')

    useEffect(() => {
        searchMovie(filter).then(movies => {
            setMovies(movies.results)
        })
        
    }, [movies]);

    const handleFormSubmit = () => {
        setSearchParams(`query=${query}`)
        setFilter(query)
    }

    return (
        <div>
            <SearchForm onSubmit={handleFormSubmit}/>
            {movies && (
                <ul>
                    {movies.map(movie => <li key={movie.id}><Link>{movie.title}</Link></li>)}
                </ul>
            )}
        </div>
    )
}

export default MoviesPage;
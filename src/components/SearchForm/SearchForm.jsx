const { useState } = require("react")
const { useSearchParams } = require("react-router-dom")

const SearchForm = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query')
    const [searchMovie, setSearchMovie] = useState(query ?? '')
    
    const onInputChange = (e) => {
        setSearchParams(e.target.value.toLowerCase())
    }

    const onFormClick = (e) => {
        e.preventDefault()
        if (searchMovie === '') {
            alert('enter something')
        }
        setSearchMovie({query:searchMovie})
    }

    return (
        <form>
            <input type="text" placeholder="search for a movie" value={searchMovie} onChange={onInputChange} />
            <button type="submit" onClick={onFormClick}>Search</button>
        </form>
    )
}

export default SearchForm
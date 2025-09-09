const { Link, Outlet } = require("react-router-dom")


const MovieDetails = () => {
    return (
        <div>
            <h2>Movie Details</h2>
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>reviews</Link>
                </li>
            </ul>

            <Outlet/>
        </div>
    )
}

export default MovieDetails
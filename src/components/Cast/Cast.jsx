import { fetchCast } from "services/moviesApi"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Cast = () => {
    const {movieId} = useParams()
    const [cast, setCast] = useState([])

    useEffect(() => {
        fetchCast(movieId)
        .then(data => setCast(data.cast))
    }, [movieId]);

    return (
        <div>
            <h2>cast</h2>
            <ul>
                {cast.map(({cast_id, name, character, profile_path}) => (
                    <li key={cast_id}>
                        {profile_path && (
                            <img src="https://image.tmdb.org/t/p/w200${profile_path}" alt="" />
                        )}
                        <p>{name}</p>
                        <p>{character}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cast
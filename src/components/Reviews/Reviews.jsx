import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchReviews } from "services/moviesApi"

const Reviews = () => {
    const {movieId} = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetchReviews(movieId)
        .then(data => setReviews(data.results))
    }, [movieId]);

    return(
        <div>
            <h2>reviews</h2>
            <ul>
                {reviews.map(({id, author, content}) => (
                    <li key={id}>
                        <p>{author}</p>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Reviews
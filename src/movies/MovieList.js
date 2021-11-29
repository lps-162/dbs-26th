import {useState } from "react";
import MovieDetails from "./MovieDetails";

const moviesData = [
    {
        id: 1,
        name: "Thalapathy",
        director: "Manirathnam",
        artist: "Rajinikanth, Mamooty"
    },
    {
        id: 2,
        name: "Jai Bhim",
        director: "TJ Gnanavel",
        artist: "Surya"
    },
    {
        id: 3,
        name: "Janatha Garage",
        director: "Kortala Shiva",
        artist: "NTR, Mohanlal"
    }
]

function MovieList() {
    const [movies, setMovies] = useState(moviesData)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const getLiTags = () => {
        const liTags = movies.map(m => <li key={m.id}>{m.name}</li>)
        return liTags
    }

    const getRowTags = () => {
        const rowTags = movies.map(m => {
        return <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.director}</td>
                <td>{m.artist}</td>
                <td>
                    <button onClick={() => setSelectedMovie(m)}>Show Details</button>
                </td>
            </tr>
        })
        return rowTags;
    }

    return (
        <div>
            List of movies
            <ol>
                {getLiTags() }
            </ol>
            <table>
                <thead>
                    <tr>
                        <th>Movie ID</th>
                        <th>Name</th>
                        <th>Director</th>
                        <th>Artists</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {getRowTags()}
                </tbody>
            </table>
            <button onClick={() => setSelectedMovie(null)}>Hide Details</button>
            { selectedMovie && <MovieDetails movie={selectedMovie} /> }
            { selectedMovie && <MovieDetails movie={selectedMovie} /> }
            { selectedMovie && <MovieDetails movie={selectedMovie} /> }
        </div>
    )
}
export default MovieList;
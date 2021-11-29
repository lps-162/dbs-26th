function MovieDetails({ movie, productionHouse }) {
    // const movie = props.movie
    // console.log(props)
    // const productionHouse = props.productionHouse

    // const { movie, productionHouse } = props
    return (
        <div>
            <h3>Movie Details : {movie.id}</h3>
            <p>Name: {movie.name}</p>
            <p>Director: {movie.director}</p>
            <p>Cast: {movie.artist}</p>

            {/* <h3>
                Production Details
            </h3>
            <p>Name : {productionHouse.name}</p>
            <p>Location : {productionHouse.location}</p> */}

        </div>
    )
}

export default MovieDetails;
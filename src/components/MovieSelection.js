const MovieSelection = ({theaters, setTheater}) => {
    const updateMovieSelection = (e) => {
        setTheater(theaters[e.target.value - 1]);
    }
    return (
        <div className="movie-selection">
            <label>Pick a movie:</label>
            <select onChange={updateMovieSelection} id="movie">
                {theaters.map(theater => {
                    return <option key={theater.id} value={theater.id}>{`${theater.movie} ($${theater.ticketPrice})`}</option>
                })}
            </select>
        </div>
    );
};

export default MovieSelection;

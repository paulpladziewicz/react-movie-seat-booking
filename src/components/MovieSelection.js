const MovieSelection = () => {
    return (
        <div className="movie-selection">
            <label>Pick a movie:</label>
            <select id="movie">
                <option value="10">Avengers: Endgame ($10)</option>
                <option value="12">Joker ($12)</option>
                <option value="8">Toy Story 4 ($8)</option>
                <option value="9">The Lion King ($9)</option>
            </select>
        </div>
    );
};

export default MovieSelection;

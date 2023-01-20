import Seat from "./Seat";

const Row = ({seats, rowIndex, updateSelectedSeat}) => {
    return (
        <div className="row">
            {seats.map((seat, i) => {
                return <Seat key={i} seat={seat} rowIndex={rowIndex} seatIndex={i} updateSelectedSeat={updateSelectedSeat} />
            })}
        </div>
    );
};

export default Row;

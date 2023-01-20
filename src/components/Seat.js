const Seat = ({ seat, rowIndex, seatIndex, updateSelectedSeat }) => {
    const getCSSClasses = () => {
        if (seat.booked) return 'seat occupied';
        if (seat.selected) return 'seat selected';
        return 'seat';
    };

    const handleClick = () => {
        if (seat.booked) return;

        if (seat.selected) return updateSelectedSeat(rowIndex, seatIndex, 0);

        updateSelectedSeat(rowIndex, seatIndex);
    };

    return <div className={getCSSClasses()} onClick={handleClick}></div>;
};

export default Seat;

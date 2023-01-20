import { useEffect, useState } from 'react';
import MovieSelection from './MovieSelection';
import SeatLegend from './SeatLegend';
import Theater from './Theater';
import TicketPricing from './TicketPricing';

const App = () => {
    const [theaters, setTheaters] = useState([]);
    const [theater, setTheater] = useState({});
    const [selectedSeats, setSelectedSeats] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const updateSelectedSeat = (rowIndex, seatIndex, selected = 1) => {
        const theaterIndex = theater.id - 1;
        const newTheaterArray = [...theaters];
        newTheaterArray[theaterIndex].seats[rowIndex][seatIndex].selected =
            selected;
        setTheaters(newTheaterArray);
        setTheater(newTheaterArray[theaterIndex]);

        if (selected === 0) {
            setSelectedSeats(selectedSeats - 1);
            setTotalPrice(totalPrice - theater.ticketPrice);
            return;
        }

        setSelectedSeats(selectedSeats + 1);
        setTotalPrice(totalPrice + theater.ticketPrice);
    };

    useEffect(() => {
        fetch('/api/theater.json')
            .then((res) => res.json())
            .then((res) => {
                setTheaters(res.data.theaters);
                setTheater(res.data.theaters[0]);
            });
    }, []);

    return (
        <>
            <MovieSelection theaters={theaters} setTheater={setTheater} />
            <SeatLegend />
            <Theater
                theater={theater}
                updateSelectedSeat={updateSelectedSeat}
            />
            <TicketPricing seats={selectedSeats} price={totalPrice} />
        </>
    );
};

export default App;

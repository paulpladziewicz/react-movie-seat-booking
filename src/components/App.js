import { useState } from 'react';
import MovieSelection from './MovieSelection';
import SeatLegend from './SeatLegend';
import Theater from './Theater';
import TicketPricing from './TicketPricing';

const App = () => {
    const [theaters, setTheaters] = useState([]);
    const [theater, setTheater] = useState({});

    return (
        <>
            <MovieSelection />
            <SeatLegend />
            <Theater />
            <TicketPricing />
        </>
    );
};

export default App;

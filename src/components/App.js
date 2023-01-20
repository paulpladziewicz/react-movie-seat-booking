import {useEffect, useState} from 'react';
import MovieSelection from './MovieSelection';
import SeatLegend from './SeatLegend';
import Theater from './Theater';
import TicketPricing from './TicketPricing';

const App = () => {
    const [theaters, setTheaters] = useState([]);
    const [theater, setTheater] = useState({});

    useEffect(() => {
        fetch('/api/theater.json')
            .then(res => res.json())
            .then(res => {
                setTheaters(res.data.theaters)
                setTheater(res.data.theaters[0])
            })
    }, [])

    return (
        <>
            <MovieSelection theaters={theaters} setTheater={setTheater} />
            <SeatLegend />
            <Theater theater={theater} />
            <TicketPricing />
        </>
    );
};

export default App;

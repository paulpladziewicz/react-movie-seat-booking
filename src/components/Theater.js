import Row from './Row';

const Theater = ({ theater, updateSelectedSeat }) => {
    return (
        <div className="theater">
            <div className="screen"></div>

            {theater.seats?.map((row, i) => {
                return (
                    <Row
                        key={i}
                        seats={row}
                        rowIndex={i}
                        updateSelectedSeat={updateSelectedSeat}
                    />
                );
            })}
        </div>
    );
};

export default Theater;

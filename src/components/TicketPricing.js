const TicketPricing = ({ seats, price }) => {
    return (
        <p className="text">
            You have selected <span id="count">{seats}</span> seats for a price
            of $<span id="total">{price}</span>
        </p>
    );
};

export default TicketPricing;

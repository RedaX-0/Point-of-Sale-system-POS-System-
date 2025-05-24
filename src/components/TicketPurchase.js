import React, { useState } from 'react';

const TicketPurchase = () => {
    const [ticketType, setTicketType] = useState('Men');
    const [quantity, setQuantity] = useState(1);
    const ticketPrice = 12; // Price in dh

    const handleTicketTypeChange = (event) => {
        setTicketType(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handlePurchase = () => {
        const totalPrice = ticketPrice * quantity;
        alert(`You have purchased ${quantity} ticket(s) for ${ticketType}. Total price: ${totalPrice} dh.`);
    };

    return (
        <div>
            <h2>Purchase Entry Ticket</h2>
            <div>
                <label>
                    Ticket Type:
                    <select value={ticketType} onChange={handleTicketTypeChange}>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        min="1"
                        onChange={handleQuantityChange}
                    />
                </label>
            </div>
            <button onClick={handlePurchase}>Purchase</button>
        </div>
    );
};

export default TicketPurchase;
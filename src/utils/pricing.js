export const ticketPrice = 12; // Price in dirhams for both men and women

export const getTicketPrice = (gender) => {
    if (gender === 'men' || gender === 'women') {
        return ticketPrice;
    }
    throw new Error('Invalid gender specified. Please use "men" or "women".');
};
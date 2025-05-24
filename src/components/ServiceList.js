import React from 'react';

const services = [
    { id: 1, name: 'Basic Entry', price: 12 },
    { id: 2, name: 'Full Spa Package', price: 12 },
    { id: 3, name: 'Massage Service', price: 12 },
];

const ServiceList = () => {
    return (
        <div>
            <h2>Our Services</h2>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        {service.name} - {service.price}dh
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;
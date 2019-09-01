import React from 'react';
import Router from 'next/router';

const Countries = ({country, handleChange}) => {
    return (
        <select value={country} onChange={handleChange}>
            <option value="uk">UK</option>
            <option value="se">Sweden</option>
            <option value="us">US</option>
        </select>
    );
};

export default Countries;
// https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=2c4df344fd1143ac9d8809c21619b9c5

import React, {useState} from 'react';
import Link from 'next/link';

function Sports(props) {
    // Declare state variables
    const [country, setCountry] = useState('us');


    return (
        props.sportsNews.map((article, index) => (
            <div key={index}>
                <h2>{article.title}</h2>
                <img src={article.urlToImage} loading="lazy" alt=""/>
                <p>{article.description}</p>
            </div>

        ))
    );
}

export default Sports;
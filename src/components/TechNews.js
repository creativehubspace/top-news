// https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2c4df344fd1143ac9d8809c21619b9c5

import React, {useState} from 'react';
import Link from 'next/link';

function Tech(props) {
    // Declare state variables
    const [country, setCountry] = useState('us');

    return (
        props.techNews.map((article, index) => (
            <div key={index}>
                <h2>{article.title}</h2>
                <img src={article.urlToImage} loading="lazy" alt=""/>
                <p>{article.description}</p>
            </div>

        ))
    );
}

export default Tech;
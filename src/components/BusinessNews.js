// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c4df344fd1143ac9d8809c21619b9c5
// Title
// Read more - article url
// Image
// Use React Hooks
// Loop through response from newsapi
// https://www.robinwieruch.de/react-hooks-fetch-data/
// listen on change here and update when country changes

import React, {useState} from 'react';
import Link from 'next/link';
import ArticleCard from "./styles/ArticleStyles";

function Business(props) {
    // Declare state variables
    const [country, setCountry] = useState('us');

    return (
        props.bizNews.map((article, index) => (
            <ArticleCard key={index}>
                <img src={article.urlToImage} loading="lazy" alt=""/>
                <div className="card-content">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} rel="noopener noreferrer " target="_blank">
                      Read more here...
                    </a>
                </div>
            </ArticleCard>
        ))
    );
}

export default Business;
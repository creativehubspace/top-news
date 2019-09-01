// https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2c4df344fd1143ac9d8809c21619b9c5

import React, {useState} from 'react';
import Link from 'next/link';
import ArticleCard from "./styles/ArticleStyles";

function Tech(props) {
    // Declare state variables
    const [country, setCountry] = useState('us');

    return (
        props.techNews.map((article, index) => (
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

export default Tech;
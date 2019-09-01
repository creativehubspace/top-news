import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import ArticleCard from "./styles/ArticleStyles";

function MainNews(props) {
    // Declare state variables
    const [country, setCountry] = useState('us');
    const [news, setNews] = useState([]);

    return (
        props.mainNews.map((article, index) => (
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

export default MainNews;
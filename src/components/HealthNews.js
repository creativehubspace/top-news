// https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=2c4df344fd1143ac9d8809c21619b9c5

import React, { useState } from 'react';
import Link from 'next/link';

function Health (props) {
  // Declare state variables
  const [country, setCountry] = useState('us');


  return (
    <div>
        <h1>Health news</h1>
        <ul>
          {props.healthNews.map(article => (
            <li key={article.url}>
              {article.title}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Health;
// https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=2c4df344fd1143ac9d8809c21619b9c5

import React, { useState } from 'react';
import Link from 'next/link';

function Tech (props) {
  // Declare state variables
  const [country, setCountry] = useState('us');


  return (
    <div>
        <h1>Tech news</h1>
        <ul>
          {props.techNews.map(article => (
            <li key={article.url}>
              {article.title}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Tech;
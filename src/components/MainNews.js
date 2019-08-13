import React, { useState } from 'react';
import Link from 'next/link';

function MainNews (props) {
  // Declare state variables
  const [country, setCountry] = useState('us');
  const [initialPage, setInitialPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);


  return (
    <div>
        <h1>Main news</h1>
        <ul>
          {props.mainNews.map(article => (
            <li key={article.url}>
              {article.title}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default MainNews;
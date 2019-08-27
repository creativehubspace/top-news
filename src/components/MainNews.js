import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

function MainNews (props) {
  // Declare state variables
  const [country, setCountry] = useState('us');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);


  return (
      props.mainNews.map((article, index) => (
        <div key={index}>
        <h2>{article.title}</h2>
          <img src={article.urlToImage} loading="lazy" alt="" />
          <p>{article.description}</p>
        </div>

      ))

  );
}

export default MainNews;
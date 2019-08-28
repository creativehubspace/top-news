import React, { useState } from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import API from '../utils/API';
import Nav from '../src/components/Nav';
import MainNews from '../src/components/MainNews';
import Pagination from '../src/components/Pagination';


function Index({ mainNews }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current articles

  const indexOfLastArticle = currentPage * postsPerPage;
  const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

  const currentMainArticle = mainNews.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
      <div>
        <Nav/>
        <MainNews mainNews={currentMainArticle} />
      </div>

  );
}

Index.getInitialProps = async () => {
  const res = await API.get('/top-headlines?country=us&pageSize=100');
  const mainNews = res.data.articles;

  return { mainNews }
};

export default Index;

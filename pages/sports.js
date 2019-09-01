import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../utils/API';
import SportsNews from '../src/components/SportsNews';
import ArticlesWrapper from "../src/components/styles/ArticlesWrapperStyles";
import Pagination from "../src/components/Pagination";

function Sports({ sportsNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentSportsArticle = sportsNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <ArticlesWrapper>
                <SportsNews sportsNews={currentSportsArticle} />
            </ArticlesWrapper>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={sportsNews.length}
                paginate={paginate}
            />
        </div>
    );
}

Sports.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=sport&pageSize=100');
    const sportsNews = res.data.articles;

    return { sportsNews }
};

export default Sports;
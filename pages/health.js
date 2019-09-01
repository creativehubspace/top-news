import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../utils/API';
import HealthNews from '../src/components/HealthNews';
import ArticlesWrapper from "../src/components/styles/ArticlesWrapperStyles";
import Pagination from "../src/components/Pagination";

function Health({ healthNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentHealthArticle = healthNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <ArticlesWrapper>
                <HealthNews healthNews={currentHealthArticle} />
            </ArticlesWrapper>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={healthNews.length}
                paginate={paginate}
            />
        </div>
    );
}

Health.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=health&pageSize=100');
    const healthNews = res.data.articles;

    return { healthNews }
};

export default Health;
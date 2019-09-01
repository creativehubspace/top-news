import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../utils/API';
import ScienceNews from '../src/components/ScienceNews';
import Pagination from "../src/components/Pagination";
import ArticlesWrapper from "../src/components/styles/ArticlesWrapperStyles";

function Science({ scienceNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentScienceArticle = scienceNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <ArticlesWrapper>
                <ScienceNews scienceNews={currentScienceArticle}/>
            </ArticlesWrapper>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={scienceNews.length}
                paginate={paginate}
            />
        </div>
    );
}

Science.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=science&pageSize=100');
    const scienceNews = res.data.articles;

    return {scienceNews}
};

export default Science;
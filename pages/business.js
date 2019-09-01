import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../utils/API';
import BusinessNews from '../src/components/BusinessNews';
import ArticlesWrapper from "../src/components/styles/ArticlesWrapperStyles";
import Pagination from "../src/components/Pagination";


function Business({ bizNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentBizArticle = bizNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <ArticlesWrapper>
                <BusinessNews bizNews={currentBizArticle}/>
            </ArticlesWrapper>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={bizNews.length}
                paginate={paginate}
            />
        </div>


    );
}

Business.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=business&pageSize=100');
    const bizNews = res.data.articles;

    return { bizNews }
};

export default Business;
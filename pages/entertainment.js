import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../utils/API';
import EntertainmentNews from '../src/components/EntertainmentNews';
import ArticlesWrapper from "../src/components/styles/ArticlesWrapperStyles";
import Pagination from "../src/components/Pagination";

//https://material-ui.com/components/cards/

function Entertainment({ entertnmtnNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentEnternArticle = entertnmtnNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <ArticlesWrapper>
                <EntertainmentNews entertainmentNews={currentEnternArticle}/>
            </ArticlesWrapper>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={entertnmtnNews.length}
                paginate={paginate}
            />
        </div>


    );
}

Entertainment.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=entertainment&pageSize=100');
    const entertnmtnNews = res.data.articles;

    return {entertnmtnNews}
};

export default Entertainment;
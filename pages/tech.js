import React, { useState } from 'react';
import styled from 'styled-components';
import API from '../utils/API';
import TechNews from '../src/components/TechNews';
import ArticlesWrapper from "../src/components/styles/ArticlesWrapperStyles";
import Pagination from "../src/components/Pagination";

function Tech({ techNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // Get current articles

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentTechArticle = techNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <ArticlesWrapper>
                <TechNews techNews={currentTechArticle} />
            </ArticlesWrapper>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={techNews.length}
                paginate={paginate}
            />
        </div>
    );
}

Tech.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=technology&pageSize=100');
    const techNews = res.data.articles;

    return { techNews }
};

export default Tech;
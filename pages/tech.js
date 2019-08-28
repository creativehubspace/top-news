import React, { useState } from 'react';
import API from '../utils/API';
import styled from 'styled-components';
import TechNews from '../src/components/TechNews';

function Tech({ techNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get current articles

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentTechArticle = techNews.slice(indexOfFirstArticle, indexOfLastArticle);

    return (
        <TechNews techNews={currentTechArticle} />
    );
}

Tech.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=technology&pageSize=100');
    const techNews = res.data.articles;

    return { techNews }
};

export default Tech;
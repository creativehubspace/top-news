import React, { useState } from 'react';
import API from '../utils/API';
import styled from 'styled-components';
import SportsNews from '../src/components/SportsNews';

function Sports({ sportsNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentSportsArticle = sportsNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber});

    return (
        <SportsNews sportsNews={currentSportsArticle} />
    );
}

Sports.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=sport&pageSize=100');
    const sportsNews = res.data.articles;

    return { sportsNews }
};

export default Sports;
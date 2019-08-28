import React, { useState } from 'react';
import API from '../utils/API';
import styled from 'styled-components';
import HealthNews from '../src/components/HealthNews';

function Health({ healthNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentHealthArticle = healthNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber});

    return (
        <HealthNews healthNews={currentHealthArticle} />
    );
}

Health.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=health&pageSize=100');
    const healthNews = res.data.articles;

    return { healthNews }
};

export default Health;
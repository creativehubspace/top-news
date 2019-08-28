import React, { useState } from 'react';
import API from '../utils/API';
import styled from 'styled-components';
import BusinessNews from '../src/components/BusinessNews';


function Business({ bizNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentBizArticle = bizNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber});

    return (
        <BusinessNews bizNews={currentBizArticle}/>

    );
}

Business.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=business&pageSize=100');
    const bizNews = res.data.articles;

    return { bizNews }
};

export default Business;
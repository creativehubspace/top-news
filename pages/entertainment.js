import React, { useState } from 'react';
import API from '../utils/API';
import styled from 'styled-components';
import EntertainmentNews from '../src/components/EntertainmentNews';

function Entertainment({ entertnmtnNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentEnternArticle = entertnmtnNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber});

    return (
        <EntertainmentNews entertainmentNews={currentEnternArticle}/>

    );
}

Entertainment.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=entertainment&pageSize=100');
    const entertnmtnNews = res.data.articles;

    return {entertnmtnNews}
};

export default Entertainment;
import React, { useState } from 'react';
import API from '../utils/API';
import styled from 'styled-components';
import ScienceNews from '../src/components/ScienceNews';


function Science({ scienceNews }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentScienceArticle = scienceNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber});

    return (
        <ScienceNews scienceNews={currentScienceArticle} />
    );
}

Science.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&category=science&pageSize=100');
    const scienceNews = res.data.articles;

    return { scienceNews }
};

export default Science;
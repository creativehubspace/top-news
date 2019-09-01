import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import API from '../utils/API';
import MainNews from '../src/components/MainNews';
import Pagination from '../src/components/Pagination';
import ArticlesWrapper from "../src/components/styles/ArticlesWrapperStyles";
import Countries from "../src/components/Countries";

function Index({ mainNews }) {
    const [country, setCountry] = useState('uk');
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const cntry = country;
        const fetchPosts = async () => {
            const res = await API.get('/top-headlines?country=' + cntry + '&pageSize=100');
            setNews(res.data.articles);
            mainNews = news;
        };

        fetchPosts();
    }, [country]);

    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    const currentMainArticle = mainNews.slice(indexOfFirstArticle, indexOfLastArticle);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    return (
        <div>
            <Countries
                country={country}
                handleChange={handleChange}
            />
            <ArticlesWrapper>
                <MainNews mainNews={currentMainArticle} />
            </ArticlesWrapper>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={mainNews.length}
                paginate={paginate}
            />
        </div>
    );
}

Index.getInitialProps = async () => {
    const res = await API.get('/top-headlines?country=us&pageSize=100');
    const mainNews = res.data.articles;

    return {mainNews}
};

export default Index;

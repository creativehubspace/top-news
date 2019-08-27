// main page section
// sidebar section

import React from 'react';
import axios from 'axios';
import API from '../utils/API';
import styled from 'styled-components';
import Main from '../src/components/MainNews';
import Business from '../src/components/BusinessNews';
import Entertainment from '../src/components/EntertainmentNews';
import Health from '../src/components/HealthNews';
import Science from '../src/components/ScienceNews';
import Sports from '../src/components/SportsNews';
import Tech from '../src/components/TechNews';
import Pagination from '../src/components/Pagination';


const StyledContainer = styled.div`
  display: flex;
`;

const StyledMainPage = styled.div`
  width: 60%;
  margin: 0 15px;
`;

const StyledSidebar = styled.div`
  width: 40%;
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 5
    };
  }

  static async getInitialProps() {
    
    try {
      const [main, biz, entern, general, health, science, sports, tech] = await axios.all([
        API.get('/top-headlines?country=us&pageSize=100'),
        API.get('/top-headlines?country=us&category=business&pageSize=100'),
        API.get('/top-headlines?country=us&category=entertainment&pageSize=100'),
        API.get('/top-headlines?country=us&category=general&pageSize=100'),
        API.get('/top-headlines?country=us&category=health&pageSize=100'),
        API.get('/top-headlines?country=us&category=science&pageSize=100'),
        API.get('/top-headlines?country=us&category=sports&pageSize=100'),
        API.get('/top-headlines?country=us&category=technology&pageSize=100')
      ]);
  
      const mainNews = main.data.articles;
      const bizNews = biz.data.articles;
      const entertainmentNews = entern.data.articles;
      const generalNews = general.data.articles;
      const healthNews = health.data.articles;
      const scienceNews = science.data.articles;
      const sportsNews = sports.data.articles;
      const techNews = tech.data.articles;
    
      console.log(bizNews);
      return { mainNews, bizNews, entertainmentNews, generalNews, healthNews, scienceNews, sportsNews, techNews };

    } catch (error) {
      console.log(error);
    }
  }

  //Get current posts
  

  render() {
    // Get current articles
    const currentPage = this.state.currentPage;
    const postsPerPage = this.state.postsPerPage;
    const indexOfLastArticle = currentPage * postsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - postsPerPage;

    // all news articles
    const newsMain = this.props.mainNews;
    const newsBiz = this.props.bizNews;
    const newsEntern = this.props.entertainmentNews;
    const newsSports = this.props.sportsNews;
    const newsHealth = this.props.healthNews;
    const newsScience = this.props.scienceNews;
    const newsTech = this.props.techNews;


    const currentMainArticle = newsMain.slice(indexOfFirstArticle, indexOfLastArticle);
    const currentBizArticle = newsBiz.slice(indexOfFirstArticle, indexOfLastArticle);
    const currentEnternArticle = newsEntern.slice(indexOfFirstArticle, indexOfLastArticle);
    const currentSportsArticle = newsSports.slice(indexOfFirstArticle, indexOfLastArticle);
    const currentHealthArticle = newsHealth.slice(indexOfFirstArticle, indexOfLastArticle);
    const currentScienceArticle = newsScience.slice(indexOfFirstArticle, indexOfLastArticle);
    const currentTechArticle = newsTech.slice(indexOfFirstArticle, indexOfLastArticle);

    // change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber});

    return (
      <StyledContainer>
        <StyledMainPage>
          <Main mainNews={currentMainArticle} />
          <Pagination postsPerPage={postsPerPage} totalPosts={newsMain.length} paginate={paginate}></Pagination>
        </StyledMainPage>
        <StyledSidebar>
          <Business bizNews={currentBizArticle} />
          <Entertainment entertainmentNews={currentEnternArticle} />
          <Health healthNews={currentHealthArticle} />
          <Science scienceNews={currentScienceArticle} />
          <Sports sportsNews={currentSportsArticle} />
          <Tech techNews={currentTechArticle} />
        </StyledSidebar>
      </StyledContainer>

    );
  }
}

export default Index;
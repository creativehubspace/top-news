// main page section
// sidebar section

import React from 'react';
import axios from 'axios';
import API from '../utils/API';
import Main from '../src/components/MainNews';
import Business from '../src/components/BusinessNews';
import Entertainment from '../src/components/EntertainmentNews';
import Health from '../src/components/HealthNews';
import Science from '../src/components/ScienceNews';
import Sports from '../src/components/SportsNews';
import Tech from '../src/components/TechNews';


class Index extends React.Component {
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

  render() {
    return (

      <div>
        <h1>Main page</h1>
 
          <Main mainNews={this.props.mainNews} />

          <Business bizNews={this.props.bizNews} />
          <Entertainment entertainmentNews={this.props.entertainmentNews} />
          <Health healthNews={this.props.healthNews} />
          <Science scienceNews={this.props.scienceNews} />
          <Sports sportsNews={this.props.sportsNews} />
          <Tech techNews={this.props.techNews} />
        </div>
        

    );
  }
}

export default Index;
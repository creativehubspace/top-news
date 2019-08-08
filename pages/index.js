// main page section
// sidebar section

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API from '../utils/API';
import Main from '../components/MainNews';
import Layout from '../components/Layout';
import Business from '../components/BusinessNews';
import Entertainment from '../components/EntertainmentNews';
import Health from '../components/HealthNews';
import Science from '../components/ScienceNews';
import Sports from '../components/SportsNews';
import Tech from '../components/TechNews';


class Index extends React.Component {
  static async getInitialProps() {
    console.log(API);
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
      <Layout>
        <h1>Main page</h1>
        <section className="wrapper wrapper__main">
          <Main mainNews={this.props.mainNews} />
        </section>
        <section className="wrapper wrapper__sidebar">
          <Business bizNews={this.props.bizNews} />
          <Entertainment entertainmentNews={this.props.entertainmentNews} />
          <Health healthNews={this.props.healthNews} />
          <Science scienceNews={this.props.scienceNews} />
          <Sports sportsNews={this.props.sportsNews} />
          <Tech techNews={this.props.techNews} />
        </section>
        
    </Layout>
    );
  }
}

export default Index;
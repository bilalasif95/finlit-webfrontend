/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import MainSearch from '../../../components/student-panel/HomePage/MainSearch';
import MainServices from '../../../components/student-panel/HomePage/MainServices';
import FinancialLiteracy from '../../../components/student-panel/HomePage/FinancialLiteracy';
import Entrepreneurship from '../../../components/student-panel/HomePage/Entrepreneurship';
import Articles from '../../../components/student-panel/HomePage/Articles';
import Events from '../../../components/student-panel/HomePage/Events';

export function HomePage() {
  return (
    <div className="main_page">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="FinLit Home Page" />
      </Helmet>
      <MainSearch />
      <MainServices />
      <FinancialLiteracy />
      <Entrepreneurship />
      <Articles />
      <Events />
    </div>
  );
}

export default HomePage;

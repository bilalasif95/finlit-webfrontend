/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import MainSection from '../../../components/instructor-panel/HomePage/MainSection';
import AddCourse from '../../../components/instructor-panel/HomePage/AddCourse';

export function HomePage() {
  return (
    <div className="main_page">
      <Helmet>
        <title>FinLit Admin - Home</title>
        <meta name="description" content="FinLit Admin - Home" />
      </Helmet>
      <div className="w-100">
        <MainSection />
        <AddCourse />
      </div>
    </div>
  );
}

export default HomePage;

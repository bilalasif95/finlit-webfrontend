/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Router } from 'react-router-dom';
import history from 'utils/history';
import { mapStateToProps, mapDispatchToProps } from "../reduxSetup/actions/registeration";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// Student Panel Panel pages routes

// import HomePage from 'containers/student-panel/HomePage/Loadable';
import HomePage from 'containers/student-panel/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import AccreditedEducationListPage from 'containers/student-panel/AccreditedEducationList/Loadable';
import LiveWebinarsList from 'containers/student-panel/LiveWebinarsList/Loadable';
import BootCampList from 'containers/student-panel/BootCampList/Loadable';
import HackathonList from 'containers/student-panel/HackathonList/Loadable';
import ArticleList from 'containers/student-panel/ArticleList/Loadable';
import LiveSessionList from 'containers/student-panel/LiveSessionList/Loadable';
import ArticleDetails from 'containers/student-panel/ArticleDetails/Loadable';
import CartCheckout from 'containers/student-panel/CartCheckout/Loadable';
import AddCartHackathon from 'containers/student-panel/AddCartHackathon/Loadable';
import AddCartWebinar from 'containers/student-panel/AddCartWebinar/Loadable';
import AddCartBootcamp from 'containers/student-panel/AddCartBootcamp/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Instructor Panel pages routes
import Home from 'containers/instructor-panel/HomePage/Loadable';
import AddWebinarPage from 'containers/instructor-panel/AddWebinarPage/Loadable';
import AddHackathonPage from 'containers/instructor-panel/AddHackathonPage/Loadable';
import AddBootCampPage from 'containers/instructor-panel/AddBootCampPage/Loadable';
import AddCoursesPage from 'containers/instructor-panel/AddCoursesPage/Loadable';
import AddArticlePage from 'containers/instructor-panel/AddArticlePage/Loadable';
import CoursesListPage from 'containers/instructor-panel/CoursesListPage/Loadable';
import WebinarsListPage from 'containers/instructor-panel/WebinarsListPage/Loadable';
import HackathonListPage from 'containers/instructor-panel/HackathonListPage/Loadable';
import BootcampListPage from 'containers/instructor-panel/BootcampListPage/Loadable';

import MyProfilePage from 'containers/MyProfilePage/Loadable';
import SigninPage from 'containers/SigninPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import EmailVerificationPage from 'containers/EmailVerification/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import CreateNewPasswordPage from 'containers/CreateNewPasswordPage/Loadable';
import Header from 'components/student-panel/Header';
import InstructorHeader from 'components/instructor-panel/Header';
import Footer from 'components/student-panel/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

const App = () => {

  let userInfo = JSON.parse(localStorage.getItem("userInfo"))
  return (

    <AppWrapper>
      <Route>

        <Helmet titleTemplate="FinLit %s" defaultTitle="FinLit">
          <meta name="description" content="FinLit" />
        </Helmet>
        {history.location.pathname === '/signup' || history.location.pathname === "/login" ||

          history.location.pathname === "/email_verification" ||
          history.location.pathname === "/create_new_password"
        ? null : userInfo && userInfo.roles[0].roleName == "Instructor" ? <InstructorHeader /> : <Header />}
 <InstructorHeader />
   <Header />
      </Route>
      <Switch>

        <Route path="/features" component={FeaturePage} />
        <Route path="/course_list" component={AccreditedEducationListPage} />
        <Route path="/webinar_list" component={LiveWebinarsList} />
        <Route path="/bootcamp_list" component={BootCampList} />
        <Route path="/hackathon_list" component={HackathonList} />
        <Route path="/article_list" component={ArticleList} />
        <Route path="/live_session_list" component={LiveSessionList} />
        <Route path="/article_details" component={ArticleDetails} />
        <Route path="/cart" component={CartCheckout} />
        <Route path="/hackathon_details/:id" component={AddCartHackathon} />
        <Route path="/webinar_details/:id" component={AddCartWebinar} />
        <Route path="/bootcamp_details/:id" component={AddCartBootcamp} />

        {/* Instructor Panel pages routes */}
        {userInfo && userInfo.roles[0].roleName == "Super Admin" || userInfo && userInfo.roles[0].roleName == "Instructor" ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={HomePage} />}
        <Route exact path="/add_webinar" component={AddWebinarPage} />
        <Route path="/add_hackathon" component={AddHackathonPage} />
        <Route path="/add_bootcamp" component={AddBootCampPage} />
        <Route path="/add_course" component={AddCoursesPage} />
        <Route path="/add_article" component={AddArticlePage} />
        <Route path="/courses_list" component={CoursesListPage} />
        <Route path="/webinars_list" component={WebinarsListPage} />
        <Route path="/hackathons_list" component={HackathonListPage} />
        <Route path="/bootcamps_list" component={BootcampListPage} />
        <Route path="/my_profile" component={MyProfilePage} />

        <Route path="/login" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/email_verification" component={EmailVerificationPage} />
        <Route path="/forgot_password" component={ForgotPasswordPage} />
        <Route path="/create_new_password" component={CreateNewPasswordPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {history.location.pathname === '/signup' || history.location.pathname === "/login" ||
        history.location.pathname === "/email_verification" ||
        history.location.pathname === "/create_new_password"

        ? null : <Footer />}
      <GlobalStyle />
      {/* </Router> */}

    </AppWrapper>

  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

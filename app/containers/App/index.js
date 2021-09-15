/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// Student Panel Panel pages routes

// import HomePage from 'containers/student-panel/HomePage/Loadable';
import HomePage from 'containers/student-panel/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import AccreditedEducationListPage from 'containers/student-panel/AccreditedEducationList/Loadable';
import LiveWebinarsList from 'containers/student-panel/LiveWebinarsList/Loadable';
import BootCampList from 'containers/student-panel/BootCampList/Loadable';
import HackathonList from 'containers/student-panel/HackathonList/Loadable';
import LiveSessionList from 'containers/student-panel/LiveSessionList/Loadable';
import ArticleDetails from 'containers/student-panel/ArticleDetails/Loadable';
import CartCheckout from 'containers/student-panel/CartCheckout/Loadable';
import AddCartHackathon from 'containers/student-panel/AddCartHackathon/Loadable';
import AddCartBootcamp from 'containers/student-panel/AddCartBootcamp/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Instructor Panel pages routes
import Home from 'containers/instructor-panel/HomePage/Loadable';
import AddWebinarPage from 'containers/instructor-panel/AddWebinarPage/Loadable';
import AddHackathonPage from 'containers/instructor-panel/AddHackathonPage/Loadable';
import AddBootCampPage from 'containers/instructor-panel/AddBootCampPage/Loadable';

import SigninPage from 'containers/SigninPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import CreateNewPasswordPage from 'containers/CreateNewPasswordPage/Loadable';
import Header from 'components/student-panel/Header';
// import InstructorHeader from 'components/instructor-panel/Header';
import Footer from 'components/student-panel/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="FinLit %s" defaultTitle="FinLit">
        <meta name="description" content="FinLit" />
      </Helmet>
      {/* {window.location.pathname === '/login' ||
      window.location.pathname === '/signup' ? (
          ''
        ) : ( */}
      <Header />
      {/* )} */}

      {/* <InstructorHeader /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route
          path="/accredited_education_list"
          component={AccreditedEducationListPage}
        />
        <Route path="/live_webinars_list" component={LiveWebinarsList} />
        <Route path="/bootcamp_list" component={BootCampList} />
        <Route path="/hackathon_list" component={HackathonList} />
        <Route path="/live_session_list" component={LiveSessionList} />
        <Route path="/article_details" component={ArticleDetails} />
        <Route path="/cart_checkout" component={CartCheckout} />
        <Route path="/addcart_hackathon" component={AddCartHackathon} />
        <Route path="/addcart_bootcamp" component={AddCartBootcamp} />
        {/* Instructor Panel pages routes */}
        <Route path="/dashboard" component={Home} />
        <Route path="/add_webinar" component={AddWebinarPage} />
        <Route path="/add_hackathon" component={AddHackathonPage} />
        <Route path="/add_bootcamp" component={AddBootCampPage} />

        <Route path="/login" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/forgot_password" component={ForgotPasswordPage} />
        <Route path="/create_new_password" component={CreateNewPasswordPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* {window.location.pathname === '/login' ||
      window.location.pathname === '/signup' ? (
        ''
      ) : ( */}
      <Footer />
      {/* )} */}
      <GlobalStyle />
    </AppWrapper>
  );
}

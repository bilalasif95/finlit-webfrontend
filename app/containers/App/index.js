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

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import AccreditedEducationListPage from 'containers/AccreditedEducationList/Loadable';
import LiveWebinarsList from 'containers/LiveWebinarsList/Loadable';
import BootCampList from 'containers/BootCampList/Loadable';
import HackathonList from 'containers/HackathonList/Loadable';
import LiveSessionList from 'containers/LiveSessionList/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SigninPage from 'containers/SigninPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

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
      <Header />
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
        <Route path="/login" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

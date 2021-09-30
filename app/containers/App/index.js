/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import history from 'utils/history';
import { connect } from 'react-redux';

import {
  mapStateToProps,
  mapDispatchToProps,
} from '../reduxSetup/actions/registeration';

import GlobalStyle from '../../global-styles';
import LoadingIndicator from '../../components/LoadingIndicator';
// Student Panel Panel pages routes

// import HomePage from 'containers/student-panel/HomePage/Loadable';
const HomePage = lazy(() =>
  import('containers/student-panel/HomePage/Loadable'),
);
const FeaturePage = lazy(() => import('containers/FeaturePage/Loadable'));
const AccreditedEducationListPage = lazy(() =>
  import('containers/student-panel/AccreditedEducationList/Loadable'),
);
const LiveWebinarsList = lazy(() =>
  import('containers/student-panel/LiveWebinarsList/Loadable'),
);
const BootCampList = lazy(() =>
  import('containers/student-panel/BootCampList/Loadable'),
);
const HackathonList = lazy(() =>
  import('containers/student-panel/HackathonList/Loadable'),
);
const ArticleList = lazy(() =>
  import('containers/student-panel/ArticleList/Loadable'),
);
const LiveSessionList = lazy(() =>
  import('containers/student-panel/LiveSessionList/Loadable'),
);
const ArticleDetails = lazy(() =>
  import('containers/student-panel/ArticleDetails/Loadable'),
);
const CartCheckout = lazy(() =>
  import('containers/student-panel/CartCheckout/Loadable'),
);
const AddCartHackathon = lazy(() =>
  import('containers/student-panel/AddCartHackathon/Loadable'),
);
const AddCartWebinar = lazy(() =>
  import('containers/student-panel/AddCartWebinar/Loadable'),
);
const AddCartBootcamp = lazy(() =>
  import('containers/student-panel/AddCartBootcamp/Loadable'),
);
const NotFoundPage = lazy(() => import('containers/NotFoundPage/Loadable'));
// Instructor Panel pages routes
const Home = lazy(() =>
  import('containers/instructor-panel/HomePage/Loadable'),
);
const AddWebinarPage = lazy(() =>
  import('containers/instructor-panel/AddWebinarPage/Loadable'),
);
const AddHackathonPage = lazy(() =>
  import('containers/instructor-panel/AddHackathonPage/Loadable'),
);
const AddBootCampPage = lazy(() =>
  import('containers/instructor-panel/AddBootCampPage/Loadable'),
);

const EditWebinarPage = lazy(() =>
  import('containers/instructor-panel/EditWebinarPage/Loadable'),
);
const EditHackathonPage = lazy(() =>
  import('containers/instructor-panel/EditHackathonPage/Loadable'),
);
const EditBootCampPage = lazy(() =>
  import('containers/instructor-panel/EditBootCampPage/Loadable'),
);
const AddCoursesPage = lazy(() =>
  import('containers/instructor-panel/AddCoursesPage/Loadable'),
);
const AddArticlePage = lazy(() =>
  import('containers/instructor-panel/AddArticlePage/Loadable'),
);
const EditArticlePage = lazy(() =>
  import('containers/instructor-panel/EditArticlePage/Loadable'),
);
const CoursesListPage = lazy(() =>
  import('containers/instructor-panel/CoursesListPage/Loadable'),
);
const WebinarsListPage = lazy(() =>
  import('containers/instructor-panel/WebinarsListPage/Loadable'),
);
const HackathonListPage = lazy(() =>
  import('containers/instructor-panel/HackathonListPage/Loadable'),
);
const BootcampListPage = lazy(() =>
  import('containers/instructor-panel/BootcampListPage/Loadable'),
);
const MyProfilePage = lazy(() => import('containers/MyProfilePage/Loadable'));
const SigninPage = lazy(() => import('containers/SigninPage/Loadable'));
const TwoFAPage = lazy(() => import('containers/TwoFAPage/Loadable'));
const SignupPage = lazy(() => import('containers/SignupPage/Loadable'));
const EmailVerificationPage = lazy(() =>
  import('containers/EmailVerification/Loadable'),
);
const ForgotPasswordPage = lazy(() =>
  import('containers/ForgotPasswordPage/Loadable'),
);
const CreateNewPasswordPage = lazy(() =>
  import('containers/CreateNewPasswordPage/Loadable'),
);
const Header = lazy(() => import('components/student-panel/Header'));
const Footer = lazy(() => import('components/student-panel/Footer'));

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

const App = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <AppWrapper>
      <Suspense
        fallback={
          <div className="page_loader">
            <LoadingIndicator />
          </div>
        }
      >
        <Route>
          <Helmet titleTemplate="FinLit %s" defaultTitle="FinLit">
            <meta name="description" content="FinLit" />
          </Helmet>
          {history.location.pathname === '/signup' ||
          history.location.pathname === '/login' ||
          history.location.pathname === '/email_verification' ||
          history.location.pathname === '/create_new_password' ||
          history.location.pathname === '/forgot_password' ||
          history.location.pathname === '/two_fa' ? null : userInfo &&
            userInfo.roles[0].roleName === 'Instructor' ? (
            <Header />
          ) : (
            <Header />
          )}
          {/* <InstructorHeader /> */}
        </Route>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={Home} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/course_list" component={AccreditedEducationListPage} />
          <Route path="/webinar_list" component={LiveWebinarsList} />
          <Route path="/bootcamp_list" component={BootCampList} />
          <Route path="/hackathon_list" component={HackathonList} />
          <Route path="/article_list" component={ArticleList} />
          <Route path="/live_session_list" component={LiveSessionList} />
          <Route path="/article_details/:id" component={ArticleDetails} />
          <Route path="/cart" component={CartCheckout} />
          <Route path="/hackathon_details/:id" component={AddCartHackathon} />
          <Route path="/webinar_details/:id" component={AddCartWebinar} />
          <Route path="/bootcamp_details/:id" component={AddCartBootcamp} />
          {/* Instructor Panel pages routes */}
          {/* {userInfo && userInfo.roles[0].roleName == "Super Admin" || userInfo && userInfo.roles[0].roleName == "Instructor" ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={HomePage} />} */}
          <Route exact path="/add_webinar" component={AddWebinarPage} />
          <Route path="/add_hackathon" component={AddHackathonPage} />
          <Route path="/add_bootcamp" component={AddBootCampPage} />
          <Route exact path="/edit_webinar/:id" component={EditWebinarPage} />
          <Route path="/edit_hackathon/:id" component={EditHackathonPage} />
          <Route path="/edit_bootcamp/:id" component={EditBootCampPage} />
          <Route path="/add_course" component={AddCoursesPage} />
          <Route path="/add_article" component={AddArticlePage} />
          <Route path="/edit_article/:id" component={EditArticlePage} />
          <Route path="/courses_list" component={CoursesListPage} />
          <Route path="/webinars_list" component={WebinarsListPage} />
          <Route path="/hackathons_list" component={HackathonListPage} />
          <Route path="/bootcamps_list" component={BootcampListPage} />
          <Route path="/my_profile" component={MyProfilePage} />
          <Route path="/login" component={SigninPage} />
          <Route path="/two_fa" component={TwoFAPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/email_verification" component={EmailVerificationPage} />
          <Route path="/forgot_password" component={ForgotPasswordPage} />
          <Route
            path="/create_new_password"
            component={CreateNewPasswordPage}
          />
          <Route path="" component={NotFoundPage} />
        </Switch>
        {history.location.pathname === '/signup' ||
        history.location.pathname === '/login' ||
        history.location.pathname === '/email_verification' ||
        history.location.pathname === '/create_new_password' ||
        history.location.pathname === '/forgot_password' ||
        history.location.pathname === '/two_fa' ? null : (
          <Footer />
        )}
        <GlobalStyle />
        {/* </Router> */}
      </Suspense>
    </AppWrapper>
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);

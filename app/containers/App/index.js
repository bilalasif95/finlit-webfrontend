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
import { Switch, Route, withRouter } from 'react-router-dom';
import history from 'utils/history';
import { connect } from 'react-redux';
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
import CourseDetails from 'containers/student-panel/CourseDetails/Loadable';
import Wishlist from 'containers/Wishlist/Loadable';
import CourseCertificate from 'containers/CourseCertificate/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// Instructor Panel pages routes
import Home from 'containers/instructor-panel/HomePage/Loadable';
import AddWebinarPage from 'containers/instructor-panel/AddWebinarPage/Loadable';
import AddHackathonPage from 'containers/instructor-panel/AddHackathonPage/Loadable';
import AddBootCampPage from 'containers/instructor-panel/AddBootCampPage/Loadable';
import EditWebinarPage from 'containers/instructor-panel/EditWebinarPage/Loadable';
import EditHackathonPage from 'containers/instructor-panel/EditHackathonPage/Loadable';
import EditBootCampPage from 'containers/instructor-panel/EditBootCampPage/Loadable';
import AddCoursesPage from 'containers/instructor-panel/AddCoursesPage/Loadable';
import AddArticlePage from 'containers/instructor-panel/AddArticlePage/Loadable';
import EditArticlePage from 'containers/instructor-panel/EditArticlePage/Loadable';
import CoursesListPage from 'containers/instructor-panel/CoursesListPage/Loadable';
import WebinarsListPage from 'containers/instructor-panel/WebinarsListPage/Loadable';
import HackathonListPage from 'containers/instructor-panel/HackathonListPage/Loadable';
import BootcampListPage from 'containers/instructor-panel/BootcampListPage/Loadable';
import MyProfilePage from 'containers/MyProfilePage/Loadable';
import MyCourses from 'containers/MyCourses/Loadable';
import Payments from 'containers/Payments/Loadable';
import CreateNewCourse from 'containers/CreateNewCourse/Loadable';
import Notification from 'containers/Notification/Loadable';
import Setting from 'containers/ProfileSetting/Loadable';
import SigninPage from 'containers/SigninPage/Loadable';
import TwoFAPage from 'containers/TwoFAPage/Loadable';
import SignupPage from 'containers/SignupPage/Loadable';
// import EmailVerificationPage from 'containers/EmailVerificationPage/Loadable';
import VerifyEmailPage from 'containers/VerifyEmailPage/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import ResetPasswordPage from 'containers/ResetPassword/Loadable';
// import CreateNewPasswordPage from 'containers/CreateNewPasswordPage/Loadable';
import Header from 'components/student-panel/Header';
// import InstructorHeader from 'components/instructor-panel/Header';
import Footer from 'components/student-panel/Footer';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../reduxSetup/actions/registeration';
// import 'rsuite/dist/styles/rsuite-default.css';
import GlobalStyle from '../../global-styles';

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
      <Route>
        <Helmet titleTemplate="FinLit %s" defaultTitle="FinLit">
          <meta name="description" content="FinLit" />
        </Helmet>
        {history.location.pathname === '/signup' ||
        history.location.pathname === '/my_profile' ||
        history.location.pathname === '/login' ||
        // history.location.pathname === '/email_verification' ||
        history.location.pathname === '/verify_email' ||
        history.location.pathname === '/create_new_password' ||
        history.location.pathname === '/notification' ||
        history.location.pathname === '/setting' ||
        history.location.pathname === '/my_courses' ||
        history.location.pathname === '/create_course' ||
        history.location.pathname === '/add_bootcamp' ||
        history.location.pathname === '/forgot_password' ||
        history.location.pathname === '/reset_password' ||
        history.location.pathname === '/payments' ||
        history.location.pathname === '/two_fa' ? null : userInfo &&
          userInfo.role.roleName === 'Instructor' ? (
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
        <Route path="/hackathon_details" component={AddCartHackathon} />
        <Route path="/webinar_details/:id" component={AddCartWebinar} />
        <Route path="/bootcamp_details/:id" component={AddCartBootcamp} />
        <Route path="/course_details" component={CourseDetails} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path="/course_certificate" component={CourseCertificate} />
        {/* Instructor Panel pages routes */}
        {/* {userInfo && userInfo.role.roleName == "Super Admin" || userInfo && userInfo.role.roleName == "Instructor" ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={HomePage} />} */}
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
        <Route path="/my_courses" component={MyCourses} />
        <Route path="/payments" component={Payments} />
        <Route path="/create_course" component={CreateNewCourse} />
        <Route path="/notification" component={Notification} />
        <Route path="/setting" component={Setting} />
        <Route path="/login" component={SigninPage} />
        <Route path="/two_fa" component={TwoFAPage} />
        <Route path="/signup" component={SignupPage} />
        {/* <Route path="/email_verification" component={EmailVerificationPage} /> */}
        <Route path="/verify_email" component={VerifyEmailPage} />
        <Route path="/forgot_password" component={ForgotPasswordPage} />
        <Route path="/create_new_password" component={ResetPasswordPage} />
        {/* <Route path="/reset_password" component={CreateNewPasswordPage} /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
      {history.location.pathname === '/reset_password' ||
      // history.location.pathname === '/signup' ||
      // history.location.pathname === '/login' ||
      history.location.pathname === '/my_profile' ||
      // history.location.pathname === '/email_verification' ||
      history.location.pathname === '/notification' ||
      history.location.pathname === '/setting' ||
      history.location.pathname === '/my_courses' ||
      history.location.pathname === '/create_course' ||
      history.location.pathname === '/add_bootcamp' ||
      history.location.pathname === '/payments' ||
      history.location.pathname === '/forgot_password' ||
      history.location.pathname === '/create_new_password' ||
      history.location.pathname === '/two_fa' ? null : (
        <Footer />
      )}
      <GlobalStyle />
      {/* </Router> */}
    </AppWrapper>
  );
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);

/*
 * My Profile Page
 *
 */
import React, { useEffect } from 'react';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
import '../../components/student-panel/Header/profile.css';
// import { withStyles } from '@material-ui/core/styles';
// import {
//   Container,
//   Row,
//   Col,
//   Label,
//   TabContent,
//   TabPane,
//   Nav,
//   NavItem,
//   NavLink,
//   Button,
//   Collapse,
//   Card,
//   CardBody,
// } from 'reactstrap';
// import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../images/logoS.png';
import Green from '../../images/green-e.png';
import Boy from '../../images/boy.png';
import Girl from '../../images/girl.png';
import Red from '../../images/red-e.png';
import Sidebar from '../../components/student-panel/Sidebar/index';
// import Profile from '../../images/profile.jpg';
import { redirectToLogin } from '../../utils/redirectToLogin';

export default function Notification() {
  // const [activeTab, setActiveTab] = useState('1');
  // const toggle = tab => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };

  useEffect(() => {
    redirectToLogin();
  }, []);

  const Notifications = [
    {
      img: Logo,
      message:
        'Programming with Python: HandsOn Introduction for Beginners FinLit',
      time: '17 days ago',
      icon: Green,
    },
    {
      img: Boy,
      message:
        'Programming with Python: HandsOn Introduction for Beginners FinLit',
      time: '17 days ago',
      icon: Red,
    },
    {
      img: Girl,
      message:
        'Programming with Python: HandsOn Introduction for Beginners FinLit',
      time: '17 days ago',
      icon: Red,
    },
    {
      img: Logo,
      message:
        'Programming with Python: HandsOn Introduction for Beginners FinLit',
      time: '17 days ago',
      icon: Red,
    },
    {
      img: Logo,
      message:
        'Programming with Python: HandsOn Introduction for Beginners FinLit',
      time: '17 days ago',
      icon: Red,
    },
    {
      img: Logo,
      message:
        'Programming with Python: HandsOn Introduction for Beginners FinLit',
      time: '17 days ago',
      icon: Red,
    },
    {
      img: Logo,
      message:
        'Programming with Python: HandsOn Introduction for Beginners FinLit',
      time: '17 days ago',
      icon: Red,
    },
    {
      img: Logo,
      message:
        'Programming with Python: HandsOn Introduction for Beginners FinLit',
      time: '17 days ago',
      icon: Red,
    },
    {
      img: Logo,
      message:
        'Programming with Python: HandsOn Introduction for Beginners FinLit',
      time: '17 days ago',
      icon: Red,
    },
  ];

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="profilePages">
        <Helmet>
          <title>My Profile</title>
          <meta name="description" content="My Profile Page" />
        </Helmet>
        <div className="profileMain">
          <Sidebar />
          {/* Profile Content */}
          <div className="profileContent">
            <div className="mainCont">
              <div className="profileHeader">
                <h4>Notification (3)</h4>
                <button type="button" className="btn btn-default readAllBtn">
                  Mark all as read
                </button>
              </div>
              <div className="notificationPanel table-responsive">
                <table className="table tableCont">
                  <thead />
                  <tbody>
                    {Notifications.map(data => (
                      <tr>
                        <td>
                          <div className="courseName">
                            <div className="NotificationImg">
                              <div className="notiImg">
                                <img src={data.img} alt="notification" />
                              </div>
                            </div>
                            <div className="courseTitle">
                              <p>{data.message}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="notitime">{data.time} </p>
                        </td>

                        <td>
                          <div className="tableIcons">
                            <img src={data.icon} alt="notification-icon" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* {Notifications.map(data => (
                  <div className="NotificationCont">
                    <div className="NotificationImg">
                      <div className="notiImg">
                        <img src={data.img} alt="notification" />
                      </div>
                      <p>{data.message}</p>
                    </div>
                    <div className="NotificationImg">
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </>
  );
}

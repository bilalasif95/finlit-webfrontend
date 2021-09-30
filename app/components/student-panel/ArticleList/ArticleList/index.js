/*
 * Hackathon List Component
 */
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button } from 'reactstrap';
import { BiCalendar } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../../config/config';
import Loader from '../../../Loader';

function HackathonList() {
  const [hackathonList, sethackathonList] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getHackathonLists();
  }, []);

  const getHackathonLists = () => {
    setLoader(true);
    const token = localStorage.getItem('token');
    const authHeaders = token
      ? {
        Authorization: `Bearer ${token}`,
        }
      : {};
    axios
      .get(`${API}api/events/getEventsByTypes?type=Hackathon`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        sethackathonList(res && res.data && res.data.data);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };

  return (
    <Wrapper id="list">
      {loader ? (
        <Loader />
      ) : (
        <div className="courses">
          <Row>
            <Col lg={12}>
              <h4>
                <FormattedMessage {...messages.ArticleList} />
              </h4>
              <div className="courses_list">
                {hackathonList.map(item => (
                  <div className="single_course" key={item.data.id}>
                    <div className="course_img">
                      <img src={item.eventImage} alt="event" height="100%" width="100%" />
                    </div>
                    <div className="course_info">
                      <h5>{item.data.mainTitle}</h5>
                      <div className="course_short_info">
                        <div className="course_desc">
                          <p>{item.data.subTitle}</p>
                        </div>
                        <div className="course_price">
                          <h5>${item.data.price}</h5>
                          <del>${item.data.price}</del>
                        </div>
                      </div>
                      <div className="course_outcomes">
                        <div className="outcomes">
                          <div className="date">
                            <BiCalendar />
                            {item.data.startDate}
                          </div>
                          <div className="viewer">
                            <HiUsers />
                            {20}
                            &nbsp;
                            <FormattedMessage {...messages.Attendees} />
                          </div>
                        </div>
                        <div className="like_enroll">
                          <Button>
                            <AiOutlineHeart />
                            {/* <AiFillHeart /> */}
                          </Button>
                          <Button>
                            <FormattedMessage {...messages.JoinUs} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Wrapper>
  );
}

export default HackathonList;

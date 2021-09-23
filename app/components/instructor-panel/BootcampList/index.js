/*
 * Webinars List Component
 */
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { BiTimeFive } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import { AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai';
import { GrFormEdit } from 'react-icons/gr';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import history from 'utils/history';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../config/config';
import Loader from '../../Loader';

function BootcampList() {
  const [bootcampList, setBootCampList] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getBootcampLists();
  }, []);

  const getBootcampLists = () => {
    setLoader(true);
    const token = localStorage.getItem('token');
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .get(`${API}api/events/getEventsByTypesAndUser?type=Bootcamp`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        setBootCampList(res && res.data && res.data.data);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };

  const handleBootcampList = id => {
    // history.push('/bootcamp_details/' + id);
  };
  return (
    <Wrapper>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="courses_list">
            {bootcampList.map(item => (
              <div
                className="single_course"
                key={item.id}
                onClick={() => handleBootcampList(item.id)}
              >
                <div className="course_img">
                  <img src={item.eventImage} alt="Course" />
                </div>
                <div className="course_info">
                  <div className="course_short_info">
                    <div className="course_desc">
                      <h5>{item.data.mainTitle}</h5>
                      <p>{item.data.subTitle}</p>
                    </div>
                    <div className="course_price">
                      <h5>${item.data.price}</h5>
                      <del>${item.data.price}</del>
                    </div>
                  </div>
                  <div className="course_outcomes">
                    <div className="date_time">
                      <div className="time-box">
                        <BiTimeFive />
                        <div className="time-text">
                          <FormattedMessage {...messages.Timings} />
                        </div>
                        &nbsp;
                        <div className="hours">
                          {item.data.startTime} - {item.data.endTime}
                        </div>
                      </div>

                      <div className="date_level">
                        <p>
                          <AiOutlineCalendar />
                          {item.createdAt}
                        </p>
                      </div>
                      <div className="date_level">
                        <p>
                          <HiUsers />
                          20
                        </p>
                      </div>
                    </div>
                    {/* <div className="rating">
                  {item.rating}
                  <div className="stars">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div> */}
                    {/* <div className="viewer">
                  <HiUsers />
                  {item.viewer}
                </div> */}
                  </div>
                </div>
                <div className="actions_btn">
                  <Button>
                    <GrFormEdit />
                  </Button>
                  <Button>
                    <AiOutlineDelete />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="form_footer">
            <div className="bottom_btns">
              <Button className="btn_save">
                <FormattedMessage {...messages.Previous} />
              </Button>
              <Button className="btn_submit">
                <FormattedMessage {...messages.Next} />
              </Button>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default BootcampList;

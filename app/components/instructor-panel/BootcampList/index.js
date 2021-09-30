/*
 * Webinars List Component
 */
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { BiTimeFive } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrFormEdit } from 'react-icons/gr';
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import history from 'utils/history';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
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

  const dltBootCamp = id => {
    setLoader(true);
    const token = localStorage.getItem('token');
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .delete(`${API}api/events/${id}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        toast.success(
          res && res.data.message
            ? res.data.message.toString()
            : 'Message Not Readable',
        );
        setTimeout(() => {
          getBootcampLists();
          setLoader(false);
        }, 4000);
      })
      .catch(err => {
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message.toString()
            : 'Message Not Readable',
        );
        setLoader(false);
      });
  };

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

  const editBootCamp = id => {
    history.push(`/edit_bootcamp/${id}`);
  };
  return (
    <Wrapper>
      <ToastContainer />
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="courses_list">
            {bootcampList.map(item => (
              <div
                className="single_course"
                key={item.id}
                role="button"
                tabIndex={0}
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
                        &nbsp;&nbsp;
                        <div className="hours">
                          {item.data.startTime} - {item.data.endTime}
                        </div>
                      </div>

                      <div className="date_level">
                        <p>
                          {item.data.startDate}
                          &nbsp;All Level
                        </p>
                      </div>
                      <div className="date_level">
                        <p>
                          <HiUsers />
                          20
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="actions_btn">
                  <Button
                    onClick={() => {
                      const { id } = item;
                      editBootCamp(id);
                    }}
                  >
                    <GrFormEdit />
                  </Button>
                  <Button
                    onClick={() => {
                      const { id } = item;
                      dltBootCamp(id);
                    }}
                  >
                    <AiOutlineDelete />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default BootcampList;

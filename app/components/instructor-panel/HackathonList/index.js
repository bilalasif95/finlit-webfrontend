/*
 * Webinars List Component
 */
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { BiTimeFive } from 'react-icons/bi';
// import { HiUsers } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrFormEdit } from 'react-icons/gr';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import history from 'utils/history';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../config/config';
import Loader from '../../Loader';

function HackathonList() {
  const [hackathonList, sethackathonList] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getHackathonLists();
  }, []);

  const dltHackathon = id => {
    setLoader(true);
    const token = localStorage.getItem('token');
    const authHeaders = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : {};
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
          getHackathonLists();
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
  const getHackathonLists = () => {
    setLoader(true);
    const token = localStorage.getItem('token');
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .get(`${API}api/events/getEventsByTypesAndUser?type=Hackathon`, {
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
  const editHackathon = id => {
    history.push(`/edit_hackathon/${id}`);
  };
  return (
    <Wrapper>
      <ToastContainer />
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="courses_list">
            {hackathonList.map(item => (
              <div className="single_course" key={item.data.id}>
                <div className="course_img">
                  <img src={item.eventImage} alt="Course" />
                </div>
                <div className="course_info">
                  <div className="course_short_info">
                    <div className="course_desc">
                      <h5>{item.data.mainTitle}</h5>
                      <p>{item.data.subTitle}</p>
                      {/* <div className="course_provider">
                    {item.createdby}
                    &nbsp;
                    <span className="provider">{item.creatorname}</span>
                  </div> */}
                    </div>
                    <div className="course_price">
                      <h5>${item.data.price}</h5>
                      <del>${item.data.price}</del>
                    </div>
                  </div>
                  <div className="course_outcomes">
                    <div className="date_time">
                      <BiTimeFive />
                      <div className="time-text">
                        <FormattedMessage {...messages.Timings} />
                      </div>
                      &nbsp;&nbsp;
                      <div className="hours">
                        {item.data.startTime} - {item.data.endTime}
                      </div>
                      <div className="date_level">
                        <p>
                          {item.data.startDate}
                          &nbsp;All Level
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
                  <Button
                    onClick={() => {
                      const { id } = item;
                      editHackathon(id);
                    }}
                  >
                    <GrFormEdit />
                  </Button>
                  <Button
                    onClick={() => {
                      const { id } = item;
                      dltHackathon(id);
                    }}
                  >
                    <AiOutlineDelete />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="form_footer">
            <div className="bottom_btns">
              <Button className="btn_save">
                // <FormattedMessage {...messages.Previous} />
              </Button>
              <Button className="btn_submit">
                // <FormattedMessage {...messages.Next} />
              </Button>
            </div>
          </div> */}
        </>
      )}
    </Wrapper>
  );
}

export default HackathonList;

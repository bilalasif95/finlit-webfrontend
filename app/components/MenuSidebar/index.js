/*
 * Menu Sidebar Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import messages from './messages';

function MenuSidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav>
        <div
          role="button"
          tabIndex={0}
          className={toggleMenu ? 'toggle-wrap active' : 'toggle-wrap'}
          onClick={() => setToggleMenu(!toggleMenu)}
          onKeyDown={() => setToggleMenu(!toggleMenu)}
        >
          <span className="toggle-bar" />
          <span className="cat_text">Categories</span>
        </div>
      </nav>

      <aside className={toggleMenu ? 'active' : ''}>
        <div className="asideCont">
          <div className="profileNav">
            <div className="side_top">
              <div
                role="button"
                tabIndex={0}
                className={toggleMenu ? 'toggle-wrap active' : 'toggle-wrap'}
                onClick={() => setToggleMenu(!toggleMenu)}
                onKeyDown={() => setToggleMenu(!toggleMenu)}
              >
                <span className="toggle-bar" />
              </div>
              <div className="reg_account">
                <div className="sign_in_up">
                  <Link to="/login">
                    <FormattedMessage {...messages.Login} />
                  </Link>
                  <Link to="/signup">
                    <FormattedMessage {...messages.Signup} />
                  </Link>
                </div>
                {/* <div className="user_account">
                  <div className="user_icon">
                    <img
                      src='https://i.imgur.com/qUzPHy4.jpg'
                      alt="User"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="user_name">
                    <p>
                      John Smith
                    </p>
                    <span>user@finlit.com</span>
                  </div>
                </div> */}
              </div>
            </div>
            <ul className="list-unstyled sideBarList">
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Goal Based Education</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">One-on-One Private Sessions</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Interactive Learning Tools</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Bootcamp</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Hackathons</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Live Webinars</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Case Studies & Stories</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Short Videos</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Chat Bot</Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

export default MenuSidebar;

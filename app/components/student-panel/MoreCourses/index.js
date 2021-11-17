/*
 * Footer Component
 */
import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import LocaleToggle from 'containers/LocaleToggle';
import Card from '../../../images/cardImg1.png';
import Card2 from '../../../images/cardImg2.png';
import CardIcon from '../../../images/cardIcon.png';
import Cart from '../../../images/cart.png';
import Wrapper from './Wrapper';

function MoreCourses() {
  return (
    <Wrapper>
      <h2>More courses for you</h2>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="card">
            <img className="card-img-top" src={Card2} alt="CardCap" />
            <div className="card-body">
              <h5 className="card-title">
                The Complete Android N Developer Course
              </h5>
              <ul className="list-unstyled cardList">
                <li>
                  <img src={CardIcon} alt="CardIcon" />
                  Advance
                </li>
                <li>
                  <img src={CardIcon} alt="CardIcon" />
                  14
                </li>
                <li>
                  <img src={CardIcon} alt="CardIcon" />
                  5.0
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="price">
                <h4>$19.00</h4>
              </div>
              <div className="addCart">
                <button type="button" className="btn btn-default">
                  <img src={Cart} alt="Cart" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="card">
            <img className="card-img-top" src={Card} alt="CardCap" />
            <div className="card-body">
              <h5 className="card-title">
                The Complete Android N Developer Course
              </h5>
              <ul className="list-unstyled cardList">
                <li>
                  <img src={CardIcon} alt="CardIcon" />
                  Advance
                </li>
                <li>
                  <img src={CardIcon} alt="CardIcon" />
                  14
                </li>
                <li>
                  <img src={CardIcon} alt="CardIcon" />
                  5.0
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="price">
                <h4>$19.00</h4>
              </div>
              <div className="addCart">
                <button type="button" className="btn btn-default">
                  <img src={Cart} alt="Cart" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default MoreCourses;

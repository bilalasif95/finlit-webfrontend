/*
 * Cart Checkout Description Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdCart } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import { InputGroup, Input, Button } from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';
import reg from '../../../images/reg.png';

function CartCheckoutDescription() {
  const CoursesList = [
    {
      id: 0,
      img: reg,
      alt: 'Courses',
      title: <FormattedMessage {...messages.Title} />,
      desc: <FormattedMessage {...messages.ShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      price: <FormattedMessage {...messages.Price} />,
    },
    {
      id: 1,
      img: reg,
      alt: 'Courses',
      title: <FormattedMessage {...messages.Title} />,
      desc: <FormattedMessage {...messages.ShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      price: <FormattedMessage {...messages.Price} />,
    },
    {
      id: 2,
      img: reg,
      alt: 'Courses',
      title: <FormattedMessage {...messages.Title} />,
      desc: <FormattedMessage {...messages.ShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      price: <FormattedMessage {...messages.Price} />,
    },
    {
      id: 3,
      img: reg,
      alt: 'Courses',
      title: <FormattedMessage {...messages.Title} />,
      desc: <FormattedMessage {...messages.ShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      price: <FormattedMessage {...messages.Price} />,
    },
    {
      id: 4,
      img: reg,
      alt: 'Courses',
      title: <FormattedMessage {...messages.Title} />,
      desc: <FormattedMessage {...messages.ShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      price: <FormattedMessage {...messages.Price} />,
    },
  ];
  return (
    <Wrapper id="list">
      <div className="cart_checkout">
        <div className="header">
          <InputGroup>
            <Input type="text" name="search" id="seach" placeholder="Search" />
            <Button>
              <BiSearchAlt2 />
            </Button>
          </InputGroup>
          <div className="cart">
            <IoMdCart />
            <span className="no_item">20</span>
          </div>
        </div>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>
                  <FormattedMessage {...messages.Courses} />
                </th>
                <th>
                  <FormattedMessage {...messages.Price} />
                </th>
                <th>
                  <FormattedMessage {...messages.Remove} />
                </th>
              </tr>
            </thead>
            <tbody>
              {CoursesList.map(item => (
                <tr key={item.id}>
                  <td>
                    <div className="detail">
                      <div className="icon">
                        <img src={item.img} alt="Icon" />
                      </div>
                      <div className="desc">
                        <div className="title">{item.title}</div>
                        <p>{item.desc}</p>
                        <div className="provider">
                          {item.providedby} {item.providername}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$150.00</td>
                  <td>
                    <Button>
                      <AiOutlineDelete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="footer">
          <div className="sub_total">
            <p>
              <FormattedMessage {...messages.Subtotal} /> $4230
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CartCheckoutDescription;

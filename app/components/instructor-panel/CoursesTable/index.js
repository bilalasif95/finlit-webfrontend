/*
 * Change Password Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Row,
  Col,
  // FormText,
} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import InputBase from '@material-ui/core/InputBase';
// import { withStyles } from '@material-ui/core/styles';
// import Switch from '@material-ui/core/Switch';
// import { BsPencil } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi';
// import QRCode from 'qrcode.react';
import { RiDeleteBin7Line } from 'react-icons/ri';
import TableImg from '../../../images/tableImg.png';
import TableImg1 from '../../../images/tableImg1.png';
import messages from './messages';
import Wrapper from './Wrapper';

function CoursesTable() {
  const TableData = [
    {
      name: 'The Web Developer BootCamp',
      img: TableImg,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },

    {
      name: 'ios & Swidt - The Completesidjvind',
      img: TableImg1,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },

    {
      name: 'The Web Developer BootCamp',
      img: TableImg,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },

    {
      name: 'ios & Swidt - The Completesidjvind',
      img: TableImg1,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },

    {
      name: 'The Web Developer BootCamp',
      img: TableImg,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },

    {
      name: 'The Web Developer BootCamp',
      img: TableImg,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },

    {
      name: 'The Web Developer BootCamp',
      img: TableImg,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },

    {
      name: 'The Web Developer BootCamp',
      img: TableImg,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },

    {
      name: 'The Web Developer BootCamp',
      img: TableImg,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },

    {
      name: 'The Web Developer BootCamp',
      img: TableImg,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },

    {
      name: 'The Web Developer BootCamp',
      img: TableImg,
      type: 'Web Development',
      level: 'All Level',
      fees: '$44.99',
      date: '10/07/2021',
      deleteIcon: <RiDeleteBin7Line />,
      editIcon: <FiEdit3 />,
    },
  ];

  return (
    <Wrapper>
      <div className="basic_info">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="courseMain table-responsive">
              <table className="table tableCont">
                <thead>
                  <tr>
                    <th scope="col">Course Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Level</th>
                    <th scope="col">Fees</th>
                    <th scope="col">Publish Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {TableData.map(item => (
                    <tr>
                      <td>
                        <div className="courseName">
                          <div className="courseImg">
                            <img src={item.img} alt="TableImg" />
                          </div>
                          <div className="courseTitle">
                            <h4>{item.name}</h4>
                          </div>
                        </div>
                      </td>
                      <td>{item.type}</td>
                      <td>{item.level}</td>
                      <td>{item.fees}</td>
                      <td>{item.date}</td>
                      <td>
                        <div className="tableIcons">
                          <span>{item.editIcon} </span>
                          <span>{item.deleteIcon}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="Paginataion">
                <p>
                  <FormattedMessage {...messages.Showing} />
                  1 to 8 of 8
                  <FormattedMessage {...messages.Entries} />
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

export default CoursesTable;

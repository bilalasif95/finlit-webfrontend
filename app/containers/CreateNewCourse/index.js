/*
 * Create New Course Page
 *
 */
import React, { useEffect, useState } from 'react';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import '../../components/student-panel/Header/profile.css';
// import { withStyles } from '@material-ui/core/styles';
import {
  FormGroup,
  Label,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  FormText,
} from 'reactstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosClose } from 'react-icons/io';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/student-panel/Sidebar/index';
import { API } from '../../config/config';
import Img from '../../components/Img';
import Wrapper from './Wrapper';
import Upload from '../../images/upload.png';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: 0,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #e6e6e6',
    fontSize: 14,
    color: '#484848',
    padding: '0.82rem 1.5rem 0.82rem 1rem',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Lato font.
    fontFamily: ['Lato', 'sans-serif'].join(','),
    '&:focus': {
      borderRadius: 4,
    },
  },
}))(InputBase);

export default function CreateNewCourse() {
  const [categoryType, setCategoryType] = useState("Financial Literacy");
  const [level, setLevel] = useState("Beginner");
  const [language, setLanguage] = useState("English");
  const [courseVideo, setCourseVideo] = useState('');
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    categoryType: '',
    email: '',
    description: '',
    country: '',
    gender: '',
    address: '',
  });
  const [errors, setErrors] = useState({});

  const dataVideo = { courseVideo: '' };

  // const getCurrentUserInfo = () => {
  //   const token = localStorage.getItem('token');
  //   const userId = JSON.parse(localStorage.getItem('userInfo'));
  //   const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
  //   axios
  //     .get(`${API}api/user/${userId && userId.id}`, {
  //       headers: {
  //         Accept: 'application/json',
  //         ...authHeaders,
  //       },
  //     })
  //     .then(res => {
  //       setUserInfo({
  //         firstName: res.data.firstName,
  //         lastName: res.data.lastName,
  //         description: res.data.description,
  //         country: res.data.country,
  //         address: res.data.address,
  //         profession: res.data.profession,
  //         email: res.data.email,
  //         gender: res.data.gender,
  //       });
  //     })
  //     .catch(err => {
  //       toast.error(
  //         err.response && err.response.data.message
  //           ? err.response.data.message.toString()
  //           : 'Message Not Readable',
  //       );
  //     });
  // };

  // useEffect(() => {
  //   setErrors({});
  //   getCurrentUserInfo();
  // }, []);

  return (
    <Wrapper>
      {/* <ToastContainer /> */}
      <div className="sub_pages profilePages">
        <Helmet>
          <title>Create New Course</title>
          <meta name="description" content="Create New Course" />
        </Helmet>
        <div className="profileMain">
          <Sidebar />
          {/* Create New Course Content */}
          <div className="profileContent">
            <div className="mainCont">
              <div className="profileHeader">
                <h3>
                  <FormattedMessage {...messages.CreateNewCourse} />
                </h3>
              </div>
              <div className="create_course">
                <Row>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="coursetitle">
                        <FormattedMessage {...messages.CourseTitle} />
                      </Label>
                      <Input
                        type="text"
                        name="coursetitle"
                        id="coursetitle"
                        placeholder="Enter Course Title"
                      />
                      <FormText>
                        <div className="error">
                          {/* <span>Error message</span> */}
                        </div>
                        {/* <span>0/60</span> */}
                      </FormText>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <FormControl fullWidth>
                        <Label>
                          <FormattedMessage {...messages.CategoryType} />
                        </Label>
                        <Select
                          value={categoryType}
                          onChange={e => {
                            setCategoryType(e.target.value);
                          }}
                          input={<BootstrapInput />}
                          fullWidth
                          name="categoryType"
                          MenuProps={{
                            anchorOrigin: {
                              vertical: 'bottom',
                              horizontal: 'left',
                            },
                            getContentAnchorEl: null,
                          }}
                        >
                          <MenuItem value="Financial Literacy">
                            Financial Literacy
                          </MenuItem>
                          <MenuItem value="Software Developer">
                            Software Developer
                          </MenuItem>
                          <MenuItem value="Medical and Health Services">
                            Medical and Health Services
                          </MenuItem>
                          <MenuItem value="Statistician">Statistician</MenuItem>
                          <MenuItem value="Speech-Language">Speech-Language</MenuItem>
                          <MenuItem value="Data Scientist">Data Scientist</MenuItem>
                        </Select>
                      </FormControl>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <FormControl fullWidth>
                        <Label>
                          <FormattedMessage {...messages.Level} />
                        </Label>
                        <Select
                          value={level}
                          onChange={e => {
                            setLevel(e.target.value);
                          }}
                          input={<BootstrapInput />}
                          fullWidth
                          name="level"
                          MenuProps={{
                            anchorOrigin: {
                              vertical: 'bottom',
                              horizontal: 'left',
                            },
                            getContentAnchorEl: null,
                          }}
                        >
                          <MenuItem value="Beginner">
                            Beginner
                          </MenuItem>
                          <MenuItem value="Expert">
                            Expert
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <FormControl fullWidth>
                        <Label>
                          <FormattedMessage {...messages.Language} />
                        </Label>
                        <Select
                          value={language}
                          onChange={e => {
                            setLanguage(e.target.value);
                          }}
                          input={<BootstrapInput />}
                          fullWidth
                          name="language"
                          MenuProps={{
                            anchorOrigin: {
                              vertical: 'bottom',
                              horizontal: 'left',
                            },
                            getContentAnchorEl: null,
                          }}
                        >
                          <MenuItem value="English">
                            English
                          </MenuItem>
                          <MenuItem value="Arabic">
                            عربي
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup className="custom">
                      <Label for="price">
                        <FormattedMessage {...messages.Price} />
                      </Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="price"
                          id="price"
                          placeholder="Enter Price"
                        />
                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                      </InputGroup>
                      {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
                    </FormGroup>
                  </Col>
                  <Col lg={12}>
                    <div className="graphics">
                      {courseVideo === '' ? (
                        <div className="view_graphic">
                          <Img src={Upload} alt="Upload" height="100%" width="100%" />
                        </div>
                      ) : (
                        <div className="view_thumb">
                          <div className="del_btn">
                            <Button
                              onClick={() => {
                                setCourseVideo('');
                                dataVideo.courseVideo = null;
                              }}
                            >
                              <IoIosClose />
                            </Button>
                          </div>
                          <video>
                            <source
                              src={
                                dataVideo.courseVideo
                                  ? typeof dataVideo.courseVideo === 'string'
                                    ? dataVideo.courseVideo
                                    : courseVideo
                                  : courseVideo
                              }
                            />
                            <track
                              src={
                                dataVideo.courseVideo
                                  ? typeof dataVideo.courseVideo === 'string'
                                    ? dataVideo.courseVideo
                                    : courseVideo
                                  : courseVideo
                              }
                              kind="captions"
                              srcLang="en"
                              label="Course Video"
                            />
                          </video>
                        </div>
                      )}
                      <Dropzone
                        accept="video/*"
                        multiple={false}
                        onDrop={acceptedFiles => {
                          if (acceptedFiles && acceptedFiles[0]) {
                            const courseVdo = acceptedFiles[0];
                            dataVideo.courseVideo = courseVdo;
                            // setcourseVideoFile(acceptedFiles[0]);
                            const reader = new FileReader();
                            reader.onload = e => {
                              setCourseVideo(e.target.result);
                            };
                            reader.readAsDataURL(acceptedFiles[0]);
                          }
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="camera" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>
                              <FormattedMessage {...messages.DragDrop} />
                            </p>
                            <div className="upload_btn">
                              <FormattedMessage {...messages.UploadVideo} />
                            </div>
                          </div>
                        )}
                      </Dropzone>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="form_footer">
                <div className="bottom_btns">
                  <Button className="btn_save">
                    <FormattedMessage {...messages.Save} />
                  </Button>
                  <Button className="btn_submit">
                    <FormattedMessage {...messages.Next} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </Wrapper>
  );
}

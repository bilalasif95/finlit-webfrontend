/*
 * Create New Course Page
 *
 */
import React, { useState } from 'react';
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
// import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
// import { IoIosClose } from 'react-icons/io';
import { IoMdAttach } from 'react-icons/io';
import { RiDeleteBin7Line } from 'react-icons/ri';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/student-panel/Sidebar/index';
// import { API } from '../../config/config';
import Img from '../../components/Img';
import Wrapper from './Wrapper';
import Upload from '../../images/upload.png';
import messages from './messages';
import TagsComponent from '../../components/CourseTag/TagsComponent';

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
  const [categoryType, setCategoryType] = useState('Select Category Type');
  const [level, setLevel] = useState('Select Level');
  const [language, setLanguage] = useState('Select Language');
  const [courseVideo, setCourseVideo] = useState('');

  // const [errors, setErrors] = useState({});
  const [courseStepOne, setCourseStepOne] = useState(true);
  const [courseStepTwo, setCourseStepTwo] = useState(false);
  const [courseStepThree, setCourseStepThree] = useState(false);
  const [courseStepFour, setCourseStepFour] = useState(false);
  const [courseStepFive, setCourseStepFive] = useState(false);

  const dataVideo = { courseVideo: '' };

  const handleCourseStepOne = () => {
    setCourseStepOne(true);
    setCourseStepTwo(false);
    setCourseStepThree(false);
    setCourseStepFour(false);
    setCourseStepFive(false);
  };

  const handleCourseStepTwo = () => {
    setCourseStepOne(false);
    setCourseStepTwo(true);
    setCourseStepThree(false);
    setCourseStepFour(false);
    setCourseStepFive(false);
  };

  const handleCourseStepThree = () => {
    setCourseStepOne(false);
    setCourseStepTwo(false);
    setCourseStepThree(true);
    setCourseStepFour(false);
    setCourseStepFive(false);
  };

  const handleCourseStepFour = () => {
    setCourseStepOne(false);
    setCourseStepTwo(false);
    setCourseStepThree(false);
    setCourseStepFour(true);
    setCourseStepFive(false);
  };

  const handleCourseStepFive = () => {
    setCourseStepOne(false);
    setCourseStepTwo(false);
    setCourseStepThree(false);
    setCourseStepFour(false);
    setCourseStepFive(true);
  };

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
              {courseStepOne && (
                <>
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
                              <MenuItem value="Select Category Type">
                                Select Category Type
                              </MenuItem>
                              <MenuItem value="Financial Literacy">
                                Financial Literacy
                              </MenuItem>
                              <MenuItem value="Software Developer">
                                Software Developer
                              </MenuItem>
                              <MenuItem value="Medical and Health Services">
                                Medical and Health Services
                              </MenuItem>
                              <MenuItem value="Statistician">
                                Statistician
                              </MenuItem>
                              <MenuItem value="Speech-Language">
                                Speech-Language
                              </MenuItem>
                              <MenuItem value="Data Scientist">
                                Data Scientist
                              </MenuItem>
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
                              <MenuItem value="Select Level">
                                Select Level
                              </MenuItem>
                              <MenuItem value="Beginner">Beginner</MenuItem>
                              <MenuItem value="Expert">Expert</MenuItem>
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
                              <MenuItem value="Select Language">
                                Select Language
                              </MenuItem>
                              <MenuItem value="English">English</MenuItem>
                              <MenuItem value="Arabic">عربي</MenuItem>
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
                            <InputGroupAddon addonType="prepend">
                              $
                            </InputGroupAddon>
                          </InputGroup>
                          {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
                        </FormGroup>
                      </Col>
                      <Col lg={12}>
                        <div className="graphics">
                          <div className="view_cont">
                            {courseVideo === '' ? (
                              <div className="view_graphic">
                                <Img
                                  src={Upload}
                                  alt="Upload"
                                  height="100%"
                                  width="100%"
                                />
                              </div>
                            ) : (
                              <div className="view_thumb">
                                <video>
                                  <source
                                    src={
                                      dataVideo.courseVideo
                                        ? typeof dataVideo.courseVideo ===
                                          'string'
                                          ? dataVideo.courseVideo
                                          : courseVideo
                                        : courseVideo
                                    }
                                  />
                                  <track
                                    src={
                                      dataVideo.courseVideo
                                        ? typeof dataVideo.courseVideo ===
                                          'string'
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
                          </div>
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
                                <div className="upload_delete">
                                  <div className="upload_btn">
                                    <FormattedMessage
                                      {...messages.UploadVideo}
                                    />
                                  </div>
                                  {/* <Button
                                    onClick={() => {
                                      setCourseVideo('');
                                      dataVideo.courseVideo = null;
                                    }}
                                  >
                                    <FormattedMessage {...messages.DeleteVideo} />
                                  </Button> */}
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
                      <Button className="btn_back">
                        <FormattedMessage {...messages.Save} />
                      </Button>
                      <Button
                        className="btn_submit"
                        onClick={handleCourseStepTwo}
                      >
                        <FormattedMessage {...messages.Next} />
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {courseStepTwo && (
                <>
                  <div className="create_course">
                    {/* Create Course */}
                    <div className="profileHeader">
                      <h3>Course Details</h3>
                      <button
                        type="button"
                        className="btn btn-default detailsBtn"
                      >
                        <span>+</span> Add More Details
                      </button>
                    </div>
                    <div className="createCourseCont">
                      <div className="card">
                        <div className="card-header">Course Details</div>
                        <div className="card-body">
                          <FormGroup>
                            <Label>Heading</Label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Title"
                            />
                          </FormGroup>
                          <FormGroup className="mt-4">
                            <Label>Description</Label>
                            <textarea
                              className="form-control"
                              rows="6"
                              placeholder="Enter Description"
                            />
                          </FormGroup>
                        </div>
                        <div className="card_Divider">
                          <div className="card-body">
                            <FormGroup>
                              <Label>Heading</Label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Title"
                              />
                            </FormGroup>
                            <FormGroup className="mt-4 mb-0">
                              <Label>Description</Label>
                              <textarea
                                className="form-control"
                                rows="6"
                                placeholder="Enter Description"
                              />
                            </FormGroup>
                            <div className="delete">
                              <RiDeleteBin7Line />
                              <span>Delete Section</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-4">
                        <div className="card-header">Course Tags</div>
                        <div className="card-body">
                          <FormGroup>
                            <Label for="price">
                              <FormattedMessage {...messages.AddTag} />
                            </Label>
                            <TagsComponent data={{ tags: [] }} tags={[]} />
                          </FormGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_footer">
                    <div className="bottom_btns">
                      <Button
                        className="btn_back"
                        onClick={handleCourseStepOne}
                      >
                        <FormattedMessage {...messages.Back} />
                      </Button>
                      <Button
                        className="btn_submit"
                        onClick={handleCourseStepThree}
                      >
                        <FormattedMessage {...messages.Next} />
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {courseStepThree && (
                <>
                  <div className="create_course">
                    <div className="profileHeader">
                      <h3>Course Content</h3>
                      <button
                        type="button"
                        className="btn btn-default detailsBtn"
                      >
                        <span>+</span> Add More Details
                      </button>
                    </div>
                    <div className="createCourseCont">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          Lesson 2
                          <div className="delete">
                            <RiDeleteBin7Line />
                            <span>Delete Section</span>
                          </div>
                        </div>
                        <div className="card-body">
                          <FormGroup>
                            <Label>Lesson Name</Label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Title"
                            />
                          </FormGroup>
                          <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center cardCustomHeader">
                              Lectures
                              <button
                                type="button"
                                className="btn btn-default detailsBtn"
                              >
                                <span>+</span> Add Lectures
                              </button>
                            </div>
                            <div className="card-body">
                              <Row>
                                <Col lg={6}>
                                  <FormGroup>
                                    <Label>Lecture 2</Label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="Enter Lecture Title"
                                    />
                                  </FormGroup>
                                </Col>
                                <Col lg={6}>
                                  <FormGroup>
                                    <Label>
                                      <FormattedMessage
                                        {...messages.DemoVideo}
                                      />
                                    </Label>
                                    <Dropzone
                                      accept="video/*"
                                      multiple={false}
                                      onDrop={acceptedFiles => {
                                        if (acceptedFiles && acceptedFiles[0]) {
                                          const courseVdo = acceptedFiles[0];
                                          data.courseVideo = courseVdo;
                                          // setcourseVideoFile(acceptedFiles[0]);
                                          const reader = new FileReader();
                                          reader.onload = e => {
                                            setCourseVideo(e.target.result);
                                          };
                                          reader.readAsDataURL(
                                            acceptedFiles[0],
                                          );
                                        }
                                      }}
                                    >
                                      {({ getRootProps, getInputProps }) => (
                                        <div
                                          className="camera"
                                          {...getRootProps()}
                                        >
                                          <input {...getInputProps()} />
                                          <div className="form-control uploadCont">
                                            <p>Upload Lecture Video</p>
                                            <div>
                                              <button
                                                type="button"
                                                className="btn btn-default uploadBtn"
                                              >
                                                Upload
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      )}
                                    </Dropzone>
                                  </FormGroup>
                                </Col>
                              </Row>
                            </div>
                          </div>

                          <div className="card mt-4">
                            <div className="card-header d-flex justify-content-between align-items-center cardCustomHeader">
                              Question
                              <button
                                type="button"
                                className="btn btn-default detailsBtn"
                              >
                                <span>+</span> Add Quiz
                              </button>
                            </div>
                            <div className="card-body" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_footer">
                    <div className="bottom_btns">
                      <Button
                        className="btn_back"
                        onClick={handleCourseStepTwo}
                      >
                        <FormattedMessage {...messages.Back} />
                      </Button>
                      <Button
                        className="btn_submit"
                        onClick={handleCourseStepFour}
                      >
                        <FormattedMessage {...messages.Next} />
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {courseStepFour && (
                <>
                  <div className="create_course">Step 4</div>
                  <div className="form_footer">
                    <div className="bottom_btns">
                      <Button
                        className="btn_back"
                        onClick={handleCourseStepThree}
                      >
                        <FormattedMessage {...messages.Back} />
                      </Button>
                      <Button
                        className="btn_submit"
                        onClick={handleCourseStepFive}
                      >
                        <FormattedMessage {...messages.Next} />
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {courseStepFive && (
                <>
                  <div className="create_course">Step 5</div>
                  <div className="form_footer">
                    <Button className="btn_back" onClick={handleCourseStepFour}>
                      <FormattedMessage {...messages.Back} />
                    </Button>
                    <div className="bottom_btns">
                      <Button className="btn_back">
                        <FormattedMessage {...messages.Save} />
                      </Button>
                      <Button className="btn_submit">
                        <FormattedMessage {...messages.Next} />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </Wrapper>
  );
}

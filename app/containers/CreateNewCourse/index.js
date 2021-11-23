/*
 * Create New Course Page
 *
 */
import React, { useEffect, useState } from 'react';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import '../../components/student-panel/Header/profile.css';
import { FiEdit3 } from 'react-icons/fi';
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
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion';
import Dropzone from 'react-dropzone';
import history from 'utils/history';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
// import { IoIosClose } from 'react-icons/io';
// import { IoMdAttach } from 'react-icons/io';
import {
  // RiStarSFill,
  RiArrowDownSLine,
  RiDeleteBin7Line,
} from 'react-icons/ri';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/student-panel/Sidebar/index';
import { endpoints } from '../../config/config';
import Img from '../../components/Img';
import Wrapper from './Wrapper';
import Upload from '../../images/upload.png';
import messages from './messages';
import TagsComponent from '../../components/CourseTag/TagsComponent';
import { redirectToLogin } from '../../utils/redirectToLogin';

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
    border: '1px solid #d8d8d8',
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
  const [categories, setCategories] = useState([]);
  const [categoryType, setCategoryType] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [language, setLanguage] = useState('English');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [courseVideo, setCourseVideo] = useState('');
  const [draftCourseId, setDraftCourseId] = useState(0);
  // const [category, setCategory] = useState('0');

  // const [errors, setErrors] = useState({});
  const [courseStepOne, setCourseStepOne] = useState(true);
  const [courseStepTwo, setCourseStepTwo] = useState(false);
  const [courseStepThree, setCourseStepThree] = useState(false);

  const [accordinOne, setAccordinOne] = useState(false);
  const [accordinTwo, setAccordinTwo] = useState(false);
  const [accordinThree, setAccordinThree] = useState(false);

  const dataVideo = { courseVideo: '' };

  const token = localStorage.getItem('token');
  const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};

  const data = {
    title,
    courseLanguage: language,
    courseLevel: level,
    categoryId: categoryType.toString(),
    price,
    promotionalVideo: courseVideo,
  };

  const createDraft = () => {
    setLoading(true);
    axios
      .post(endpoints.createCourseAsDraft, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        setLoading(false);
        setDraftCourseId(res.data.data.draftCourseId);
        handleCourseStepTwo();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const handleCourseStepOne = () => {
    setCourseStepOne(true);
    setCourseStepTwo(false);
    setCourseStepThree(false);
  };

  const handleCourseStepTwo = () => {
    setCourseStepOne(false);
    setCourseStepTwo(true);
    setCourseStepThree(false);
  };

  const handleCourseStepThree = () => {
    setCourseStepOne(false);
    setCourseStepTwo(false);
    setCourseStepThree(true);
  };

  const goToCoursesList = () => {
    history.push('/my_courses');
  };

  const openAccordinOne = () => {
    setAccordinOne(true);
    setAccordinTwo(false);
    setAccordinThree(false);
  };

  const openAccordinTwo = () => {
    setAccordinOne(false);
    setAccordinTwo(true);
    setAccordinThree(false);
  };

  const openAccordinThree = () => {
    setAccordinOne(false);
    setAccordinTwo(false);
    setAccordinThree(true);
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

  useEffect(() => {
    redirectToLogin();
    setLoading(true);
    axios.get(endpoints.courseCategory).then(res => {
      setLoading(false);
      setCategories(res.data.data);
      if (res.data.data.length > 0) {
        setCategoryType(1);
      }
    });
  }, []);

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
                            value={title}
                            onChange={e => setTitle(e.target.value)}
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
                              {categories.map(res => (
                                <MenuItem key={res.id} value={res.id}>
                                  {res.categoryName}
                                </MenuItem>
                              ))}
                              {/* <MenuItem value="Select Category Type">
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
                              </MenuItem> */}
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
                              <MenuItem value="Beginner">Beginner</MenuItem>
                              <MenuItem value="Intermediate">
                                Intermediate
                              </MenuItem>
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
                              type="number"
                              min={0}
                              name="price"
                              id="price"
                              value={price}
                              onChange={e => setPrice(e.target.value)}
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
                                setCourseVideo(acceptedFiles[0]);
                                // setcourseVideoFile(acceptedFiles[0]);
                                const reader = new FileReader();
                                // reader.onload = e => {
                                //   setCourseVideo(e.target.result);
                                // };
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
                      <Button className="btn_back" onClick={goToCoursesList}>
                        <FormattedMessage {...messages.Back} />
                      </Button>
                      <Button
                        className="btn_submit"
                        disabled={!title || !price || loading}
                        onClick={createDraft}
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
                            <Input
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
                              <Input
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
                      <div className="card mt-4 mb-5">
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
                          {/* <div className="delete_item">
                            <RiDeleteBin7Line />
                            <span>Delete Section</span>
                          </div> */}
                        </div>
                        <div className="card-body">
                          <FormGroup>
                            <Label>Lesson Name</Label>
                            <Input
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
                                          dataVideo.courseVideo = courseVdo;
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
                                          <Input {...getInputProps()} />
                                          <div className="form-control uploadCont">
                                            <p>Upload Lecture Video</p>
                                            <div>
                                              <button
                                                type="button"
                                                className="btn btn-default uploadBtn"
                                              >
                                                Upload File
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

                            <div className="card_Divider">
                              <div className="card-body">
                                <Row>
                                  <Col lg={6}>
                                    <FormGroup className="mb-0">
                                      <Label>Lecture 1</Label>
                                      <input
                                        type="email"
                                        className="form-control"
                                      />
                                    </FormGroup>
                                  </Col>
                                  <Col lg={6}>
                                    <FormGroup className="mb-0">
                                      <Label>
                                        <FormattedMessage
                                          {...messages.DemoVideo}
                                        />
                                      </Label>
                                      <Dropzone
                                        accept="video/*"
                                        multiple={false}
                                        onDrop={acceptedFiles => {
                                          if (
                                            acceptedFiles &&
                                            acceptedFiles[0]
                                          ) {
                                            const courseVdo = acceptedFiles[0];
                                            dataVideo.courseVideo = courseVdo;
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
                                            <Input {...getInputProps()} />
                                            <div className="form-control uploadCont">
                                              <p>Upload Lecture Video</p>
                                              <div>
                                                <button
                                                  type="button"
                                                  className="btn btn-default uploadBtn"
                                                >
                                                  Upload File
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </Dropzone>
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <div className="delete">
                                  <RiDeleteBin7Line />
                                  <span>Delete Lecture</span>
                                </div>
                              </div>
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
                            <div className="card-body">
                              <div className="add_forms">
                                <div className="add_form">
                                  <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                      <FormGroup className="mb-3">
                                        <Label for="sub_title">
                                          <FormattedMessage
                                            {...messages.Type}
                                          />
                                        </Label>
                                        <Input
                                          type="text"
                                          name="title"
                                          id="sub_title"
                                          placeholder="Type the Question"
                                        />
                                      </FormGroup>
                                      <div className="quizAnswer">
                                        <div className="Answers">
                                          <input
                                            className="radio"
                                            type="radio"
                                            id="age1"
                                            name="age"
                                            value="30"
                                          />
                                          <input
                                            className="textField"
                                            placeholder="Answer 1"
                                            type="text"
                                          />
                                        </div>
                                        <div className="Answers">
                                          <input
                                            className="radio"
                                            type="radio"
                                            id="age2"
                                            name="age"
                                            value="60"
                                          />
                                          <input
                                            className="textField"
                                            placeholder="Answer 2"
                                            type="text"
                                          />
                                        </div>
                                        <div className="Answers">
                                          <input
                                            className="radio"
                                            type="radio"
                                            id="age3"
                                            name="age"
                                            value="100"
                                          />
                                          <input
                                            className="textField"
                                            placeholder="Answer 3"
                                            type="text"
                                          />
                                        </div>
                                        <div className="quizQuestions">
                                          <div className="editQuiz">
                                            <p>
                                              The instructor was well prepared
                                              for the class?
                                            </p>
                                            <div className="quizIcons">
                                              <span>
                                                <FiEdit3 />
                                              </span>
                                              <span>
                                                <RiDeleteBin7Line />
                                              </span>
                                            </div>
                                          </div>
                                          <div className="editQuiz">
                                            <p>Well prepared for the class?</p>
                                            <div className="quizIcons">
                                              <span>
                                                <FiEdit3 />
                                              </span>
                                              <span>
                                                <RiDeleteBin7Line />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add_form mt-4 accordionMain">
                        {/* <Accordion allowZeroExpanded>
                          <AccordionItem uuid="a">
                            <div className="customAccordion">
                              <AccordionItemHeading className="headingBtn">
                                <AccordionItemButton>
                                  Lesson 1
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <div className="delete_item">
                                <RiDeleteBin7Line />
                                <span>Delete Section</span>
                              </div>
                            </div>
                            <AccordionItemPanel>
                              <div className="section_in">
                                <div className="item">
                                  <div className="left">
                                    Introduction Copy
                                  </div>
                                  <div className="right">
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="left">
                                    Interactive lesson Copy
                                  </div>
                                  <div className="right">
                                  </div>
                                </div>
                                <div className="item">
                                  <div className="left">
                                    Lesson 1.1 Copy
                                  </div>
                                  <div className="right">
                                  </div>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion> */}
                        <div className="custom_accordin">
                          <div className="accordin_item">
                            <div className="accordin_header">
                              <Button
                                className="accordin_title"
                                onClick={openAccordinOne}
                              >
                                Lesson 1
                                <div className="accordin_icon">
                                  <RiArrowDownSLine />
                                </div>
                              </Button>
                              <div className="delete_item">
                                <Button>
                                  <RiDeleteBin7Line />
                                  <span>Delete Section</span>
                                </Button>
                              </div>
                            </div>
                            {accordinOne && (
                              <div className="accordin_content">Lesson 1</div>
                            )}
                          </div>
                          <div className="accordin_item">
                            <div className="accordin_header">
                              <Button
                                className="accordin_title"
                                onClick={openAccordinTwo}
                              >
                                Lesson 2
                                <div className="accordin_icon">
                                  <RiArrowDownSLine />
                                </div>
                              </Button>
                              <div className="delete_item">
                                <Button>
                                  <RiDeleteBin7Line />
                                  <span>Delete Section</span>
                                </Button>
                              </div>
                            </div>
                            {accordinTwo && (
                              <div className="accordin_content">Lesson 2</div>
                            )}
                          </div>
                          <div className="accordin_item">
                            <div className="accordin_header">
                              <Button
                                className="accordin_title"
                                onClick={openAccordinThree}
                              >
                                Lesson 3
                                <div className="accordin_icon">
                                  <RiArrowDownSLine />
                                </div>
                              </Button>
                              <div className="delete_item">
                                <Button>
                                  <RiDeleteBin7Line />
                                  <span>Delete Section</span>
                                </Button>
                              </div>
                            </div>
                            {accordinThree && (
                              <div className="accordin_content">Lesson 3</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_footer publishBtns">
                    <Button className="btn_back" onClick={handleCourseStepTwo}>
                      <FormattedMessage {...messages.Back} />
                    </Button>
                    <div className="bottom_btns">
                      <Button
                        className="btn_back"
                        onClick={handleCourseStepTwo}
                      >
                        <FormattedMessage {...messages.Draft} />
                      </Button>
                      <Button className="btn_submit">
                        <FormattedMessage {...messages.Publish} />
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

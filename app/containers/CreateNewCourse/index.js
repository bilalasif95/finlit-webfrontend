/*
 * Create New Course Page
 *
 */
import React, { useEffect, useState, useRef } from 'react';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import JoditEditor from 'jodit-react';
import '../../components/student-panel/Header/profile.css';
// import { FiEdit3 } from 'react-icons/fi';
// import { FaVideo } from 'react-icons/fa';
import { IoIosClose, IoIosCloseCircleOutline } from 'react-icons/io';
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
  // FormText,
  Progress,
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
// import { IoMdAttach } from 'react-icons/io';
// import {
//   RiStarSFill,
//   RiArrowDownSLine,
//   RiDeleteBin7Line,
// } from 'react-icons/ri';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/student-panel/Sidebar/index';
import {
  endpoints,
  JoditEditorConfig,
  // JoditEditorReadOnlyConfig,
} from '../../config/config';
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
  const editor = useRef(null);
  // const notEditableEditor = useRef(null);
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryType, setCategoryType] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [language, setLanguage] = useState('English');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [courseVideo, setCourseVideo] = useState('');
  const [draftCourseId, setDraftCourseId] = useState(0);
  const [heading, setHeading] = useState('');
  const [detailsSection, setDetailsSection] = useState([]);
  const [tags, setTags] = useState([]);
  const [lectureVideo, setLectureVideo] = useState('');
  // const [category, setCategory] = useState('0');

  const lecVideo = { lectureVideo: '' };

  const setTagsFunc = tags => {
    console.log(tags, '=========tags');
  };

  // const [errors, setErrors] = useState({});
  const [courseStepOne, setCourseStepOne] = useState(true);
  const [courseStepTwo, setCourseStepTwo] = useState(false);
  const [courseStepThree, setCourseStepThree] = useState(false);

  // const [accordinOne, setAccordinOne] = useState(false);
  // const [accordinTwo, setAccordinTwo] = useState(false);
  // const [accordinThree, setAccordinThree] = useState(false);
  const [dataVideo, setDataVideo] = useState(null);

  const token = localStorage.getItem('token');
  const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};

  const bodyFormData = new FormData();
  bodyFormData.append('title', title);
  bodyFormData.append('courseLanguage', language);
  bodyFormData.append('categoryId', categoryType);
  bodyFormData.append('courseLevel', level);
  bodyFormData.append('price', price);
  bodyFormData.append('promotionalVideo', dataVideo);

  const createDraft = () => {
    setLoading(true);
    axios
      .post(endpoints.createCourseAsDraft, bodyFormData, {
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

  // const openAccordinOne = () => {
  //   setAccordinOne(true);
  //   setAccordinTwo(false);
  //   setAccordinThree(false);
  // };

  // const openAccordinTwo = () => {
  //   setAccordinOne(false);
  //   setAccordinTwo(true);
  //   setAccordinThree(false);
  // };

  // const openAccordinThree = () => {
  //   setAccordinOne(false);
  //   setAccordinTwo(false);
  //   setAccordinThree(true);
  // };

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

  const addDetailsSection = () => {
    const section = {
      heading,
      description: content,
    };
    setDetailsSection(prev => prev.concat(section));
    setHeading('');
    setContent('');
  };

  const onDeleteSection = (e, index) => {
    e.preventDefault();
    const filterData = detailsSection.filter((res, ind) => ind !== index);
    setDetailsSection(filterData);
  };

  return (
    <Wrapper>
      {/* <ToastContainer /> */}
      <div className="profilePages">
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
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <FormGroup>
                          <Label for="coursetitle">
                            <FormattedMessage {...messages.Title} />
                          </Label>
                          <InputGroup>
                            <Input
                              type="text"
                              name="coursetitle"
                              id="coursetitle"
                              value={title}
                              onChange={e => setTitle(e.target.value)}
                              placeholder="Enter Title"
                            />
                            <InputGroupAddon
                              addonType="prepend"
                              className="text_limit"
                            >
                              0/60
                            </InputGroupAddon>
                          </InputGroup>
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
                          {courseVideo === '' ? (
                            <div className="view_cont">
                              <div className="view_graphic">
                                <div className="upload_icon">
                                  <Img
                                    src={Upload}
                                    alt="Upload"
                                    height="100%"
                                    width="100%"
                                  />
                                </div>
                              </div>
                              <Dropzone
                                accept="video/*"
                                multiple={false}
                                onDrop={acceptedFiles => {
                                  if (acceptedFiles && acceptedFiles[0]) {
                                    setDataVideo(acceptedFiles[0]);
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
                                    <div className="drop_upload">
                                      <p>
                                        <FormattedMessage
                                          {...messages.DragDrop}
                                        />
                                        <span className="browse">
                                          <FormattedMessage
                                            {...messages.Browse}
                                          />
                                        </span>
                                      </p>
                                    </div>
                                    <span className="support">
                                      <FormattedMessage {...messages.Support} />
                                    </span>
                                  </div>
                                )}
                              </Dropzone>
                            </div>
                          ) : (
                            <div className="view_thumb">
                              <video>
                                <source
                                  src={
                                    dataVideo
                                      ? typeof dataVideo === 'string'
                                        ? dataVideo
                                        : courseVideo
                                      : courseVideo
                                  }
                                />
                                <track
                                  src={
                                    dataVideo
                                      ? typeof dataVideo === 'string'
                                        ? dataVideo
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
                      </Col>
                    </Row>
                  </div>
                  <div className="form_footer">
                    {courseVideo === '' ? (
                      ''
                    ) : (
                      <Button
                        className="btn_submit"
                        onClick={() => {
                          setCourseVideo('');
                          dataVideo.courseVideo = null;
                        }}
                      >
                        <FormattedMessage {...messages.DeleteVideo} />
                      </Button>
                    )}
                    <div className="bottom_btns">
                      <Button className="btn_back" onClick={goToCoursesList}>
                        <FormattedMessage {...messages.Back} />
                      </Button>
                      <Button
                        className="btn_submit"
                        disabled={!title || !price || loading}
                        // onClick={createDraft}
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
                      <h3>Course Introduction</h3>
                    </div>
                    <div className="createCourseCont">
                      <div className="card">
                        <div className="card-header">Introduction</div>
                        <div className="card-body">
                          <FormGroup>
                            <Label>Title</Label>
                            <Input
                              type="text"
                              name="heading"
                              value={heading}
                              onChange={e => setHeading(e.target.value)}
                              className="form-control"
                              placeholder="Enter Title"
                            />
                          </FormGroup>
                          <FormGroup className="mt-4">
                            <Label>Description</Label>
                            <JoditEditor
                              ref={editor}
                              value={content}
                              config={JoditEditorConfig}
                              tabIndex={0} // tabIndex of textarea
                              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            />
                            {/* <textarea
                              className="form-control"
                              rows="6"
                              placeholder="Enter Description"
                            /> */}
                          </FormGroup>
                          <div className="details_list">
                            {detailsSection.map((res, index) => (
                              <div className="item">
                                <Button className="title_btn">
                                  {res.heading}
                                </Button>
                                <Button
                                  onClick={e => onDeleteSection(e, index)}
                                >
                                  <IoIosCloseCircleOutline />
                                </Button>
                              </div>
                            ))}
                          </div>
                          <Button
                            type="button"
                            className="add_btn"
                            onClick={addDetailsSection}
                            disabled={!heading || !content}
                          >
                            <span>+</span>
                            Add More Details
                          </Button>
                        </div>
                        {/* <div className="card_Divider">
                          {detailsSection.map((res, index) => (
                            <div className="card-body">
                              <FormGroup>
                                <Label>Heading</Label>
                                <Input
                                  readOnly
                                  value={res.heading}
                                  className="form-control"
                                  placeholder="Enter Title"
                                />
                              </FormGroup>
                              <FormGroup className="mt-4 mb-0">
                                <Label>Description</Label>
                                <JoditEditor
                                  ref={notEditableEditor}
                                  value={res.description}
                                  config={JoditEditorReadOnlyConfig}
                                  tabIndex={0} // tabIndex of textarea
                                />
                              </FormGroup>
                              <div
                                className="delete"
                                onClick={e => onDeleteSection(e, index)}
                              >
                                <RiDeleteBin7Line />
                                <span>Delete Section</span>
                              </div>
                            </div>
                          ))}
                        </div> */}
                      </div>
                      <div className="card mt-4 mb-5">
                        <div className="card-header">Course Tags</div>
                        <div className="card-body">
                          <FormGroup>
                            <Label for="price">
                              <FormattedMessage {...messages.AddTag} />
                            </Label>
                            <TagsComponent data={setTagsFunc} tags={tags} />
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
                    </div>
                    <div className="createCourseCont">
                      <div className="card mb-3">
                        <div className="card-header d-flex justify-content-between align-items-center cardCustomHeader">
                          Lesson 2
                        </div>
                        <div className="card-body">
                          <Row>
                            <Col lg={12}>
                              <FormGroup>
                                <Label>Title</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Title"
                                />
                              </FormGroup>
                            </Col>
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
                                  <FormattedMessage {...messages.DemoVideo} />
                                </Label>
                                {lectureVideo === '' ? (
                                  <Dropzone
                                    accept="video/*"
                                    multiple={false}
                                    onDrop={acceptedFiles => {
                                      if (acceptedFiles && acceptedFiles[0]) {
                                        const lecVdo = acceptedFiles[0];
                                        lecVideo.lectureVideo = lecVdo;
                                        // setcourseVideoFile(acceptedFiles[0]);
                                        const reader = new FileReader();
                                        reader.onload = e => {
                                          setLectureVideo(e.target.result);
                                        };
                                        reader.readAsDataURL(acceptedFiles[0]);
                                      }
                                    }}
                                  >
                                    {({ getRootProps, getInputProps }) => (
                                      <div
                                        className="camera"
                                        {...getRootProps()}
                                      >
                                        <input {...getInputProps()} />
                                        <div
                                          type="button"
                                          className="uploadBtn"
                                        >
                                          <span>Upload Video</span>
                                        </div>
                                      </div>
                                    )}
                                  </Dropzone>
                                ) : (
                                  <div className="uploading_video">
                                    <div className="file_progress">
                                      <p>
                                        File
                                        <span>video File name here</span>
                                        is uploading
                                      </p>
                                      <Progress value={70} />
                                    </div>
                                    <div className="del_video">
                                      <Button
                                        onClick={() => {
                                          setLectureVideo('');
                                          lecVideo.lectureVideo = null;
                                        }}
                                        className="del_btn"
                                      >
                                        <IoIosClose />
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <div className="details_list">
                            {/* {detailsSection.map((res, index) => ( */}
                            <div className="item">
                              <Button className="title_btn">Lecture 1</Button>
                              <Button>
                                {/* onClick={e => onDeleteSection(e, index)} */}
                                <IoIosCloseCircleOutline />
                              </Button>
                            </div>
                            <div className="item">
                              <Button className="title_btn">Lecture 2</Button>
                              <Button>
                                {/* onClick={e => onDeleteSection(e, index)} */}
                                <IoIosCloseCircleOutline />
                              </Button>
                            </div>
                            <div className="item">
                              <Button className="title_btn">Lecture 3</Button>
                              <Button>
                                {/* onClick={e => onDeleteSection(e, index)} */}
                                <IoIosCloseCircleOutline />
                              </Button>
                            </div>
                            {/* ))} */}
                          </div>
                          <Button type="button" className="add_btn">
                            <span>+</span> Add more lectures
                          </Button>
                        </div>
                      </div>
                      <div className="details_list">
                        {/* {detailsSection.map((res, index) => ( */}
                        <div className="item">
                          <Button className="main_title">Lesson 1</Button>
                          <Button>
                            {/* onClick={e => onDeleteSection(e, index)} */}
                            <IoIosCloseCircleOutline />
                          </Button>
                        </div>
                        <div className="item">
                          <Button className="main_title">Lesson 2</Button>
                          <Button>
                            {/* onClick={e => onDeleteSection(e, index)} */}
                            <IoIosCloseCircleOutline />
                          </Button>
                        </div>
                        <div className="item">
                          <Button className="main_title">Lesson 3</Button>
                          <Button>
                            {/* onClick={e => onDeleteSection(e, index)} */}
                            <IoIosCloseCircleOutline />
                          </Button>
                        </div>
                        {/* ))} */}
                        <Button type="button" className="add_btn">
                          <span>+</span> Add more Lesson
                        </Button>
                      </div>

                      <div className="card mt-4 mb-5">
                        <div className="card-header d-flex justify-content-between align-items-center cardCustomHeader">
                          Lecture Quiz
                          {/* <button
                            type="button"
                            className="btn btn-default detailsBtn"
                          >
                            <span>+</span> Add Quiz
                          </button> */}
                        </div>
                        <div className="card-body">
                          <div className="add_forms">
                            <div className="add_form">
                              <Row>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                  <FormGroup className="mb-3">
                                    <Label for="sub_title">
                                      <FormattedMessage {...messages.Type} />
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
                                    <div className="details_list">
                                      {/* {detailsSection.map((res, index) => ( */}
                                      <div className="item">
                                        <Button className="title_btn">
                                          Question 1
                                        </Button>
                                        <Button>
                                          {/* onClick={e => onDeleteSection(e, index)} */}
                                          <IoIosCloseCircleOutline />
                                        </Button>
                                      </div>
                                      <div className="item">
                                        <Button className="title_btn">
                                          Question 2
                                        </Button>
                                        <Button>
                                          {/* onClick={e => onDeleteSection(e, index)} */}
                                          <IoIosCloseCircleOutline />
                                        </Button>
                                      </div>
                                      <div className="item">
                                        <Button className="title_btn">
                                          Question 3
                                        </Button>
                                        <Button>
                                          {/* onClick={e => onDeleteSection(e, index)} */}
                                          <IoIosCloseCircleOutline />
                                        </Button>
                                      </div>
                                      <div className="item">
                                        <Button className="title_btn">
                                          Question 4
                                        </Button>
                                        <Button>
                                          {/* onClick={e => onDeleteSection(e, index)} */}
                                          <IoIosCloseCircleOutline />
                                        </Button>
                                      </div>
                                      {/* ))} */}
                                      <div className="quiz_footer">
                                        <Button
                                          type="button"
                                          className="add_btn"
                                        >
                                          <span>+</span> Add Question
                                        </Button>
                                        <p>Question 5 of 5</p>
                                      </div>
                                    </div>
                                    {/* <div className="quizQuestions">
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
                                    </div> */}
                                  </div>
                                </Col>
                              </Row>
                            </div>
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

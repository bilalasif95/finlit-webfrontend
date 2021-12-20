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
import { FiEdit3, FiUpload } from 'react-icons/fi';
import _ from 'lodash'
import { IoIosClose, IoMdChatboxes } from 'react-icons/io';
// , IoIosCloseCircleOutline
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
import { MdDelete, MdCheckCircle } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';
import { RiQuestionnaireFill } from 'react-icons/ri';
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
  API,
  endpoints,
  JoditEditorConfig,
  JoditEditorReadOnlyConfig,
} from '../../config/config';
import Img from '../../components/Img';
import Wrapper from './Wrapper';
import Upload from '../../images/upload.png';
import messages from './messages';
import TagsComponent from '../../components/CourseTag/TagsComponent';
import { redirectToLogin } from '../../utils/redirectToLogin';
import { apiPostRequest } from '../../helpers/Requests';
import AddLecture from './AddLecture/AddLecture';
import LectureList from './LectureList/LectureList';
import AddQuiz from './AddQuiz/AddQuiz';
import QuestionList from './QuestionList/QuestionList';
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

// var editor = new Jodit("#editor", {
//   "useSearch": false,
//   "uploader": {
//     "insertImageAsBase64URI": true
//   },
//   "spellcheck": false,
//   "showCharsCounter": false,
//   "showWordsCounter": false,
//   "showXPathInStatusbar": false,
//   "inline": true,
//   "toolbarInlineForSelection": true,
//   "showPlaceholder": false,
//   "buttons": "bold,italic,underline,strikethrough,ul,ol,left,font,fontsize,paragraph,image,file,hr,table,link"
// });

export default function CreateNewCourse() {
  const [toggleReadView, setToggleReadView] = useState(-1);
  const [toggleEditView, setToggleEditView] = useState(-1);
  const [toggleLessonReadView, setToggleLessonReadView] = useState(-1);
  const [toggleLessonEditView, setToggleLessonEditView] = useState(-1);
  const [newSectionToggle, setNewSectionToggle] = useState(false);
  const editor = useRef(null);
  const notEditableEditor = useRef(null);
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryType, setCategoryType] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [language, setLanguage] = useState('English');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [courseVideo, setCourseVideo] = useState('');
  const [draftCourseId, setDraftCourseId] = useState(41);
  const [heading, setHeading] = useState('');
  const [detailsSection, setDetailsSection] = useState([]);
  const [tags, setTags] = useState({});
  const [addLectureList, setAddLectureList] = useState([])

  const [lessonTitle, setLessonTitle] = useState('')
  const [lessonsList, setLessonsList] = useState([])
  const [lessonId, setLessonId] = useState(2)
  const [lectureVideo, setLectureVideo] = useState('');
  // const [category, setCategory] = useState('0');
  const [hideBtns, setHideBtns] = useState(true);
  const [showBtns, setShowBtns] = useState(false);
  const [addLectureSection, setAddLectureSection] = useState(false);
  const [addQuizSection, setAddQuizSection] = useState(false);
  const titleLimit = `${title.length}/60`;
  const lecVideo = { lectureVideo: '' };


  // const [errors, setErrors] = useState({});
  const [courseStepOne, setCourseStepOne] = useState(true);
  const [courseStepTwo, setCourseStepTwo] = useState(false);
  // const [courseStepThree, setCourseStepThree] = useState(false);

  const [accordinOne, setAccordinOne] = useState(false);

  const [dataVideo, setDataVideo] = useState(null);


  const getPayload = () => {
    const details = JSON.stringify(detailsSection);
    const staticTags = JSON.stringify(Object.values(tags));
    const bodyFormData = new FormData();
    bodyFormData.append('title', title);
    bodyFormData.append('courseLanguage', language);
    bodyFormData.append('categoryId', categoryType);
    bodyFormData.append('courseLevel', level);
    bodyFormData.append('price', price);
    bodyFormData.append('promotionalVideo', dataVideo);
    bodyFormData.append('details', details);
    bodyFormData.append('tags', staticTags);
    return bodyFormData;

  }

  const createDraft = () => {
    const token = localStorage.getItem('token');
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    const payload = getPayload();

    // for (var pair of payload.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    // setLoading(true);
    // axios
    //   .post(endpoints.createCourseAsDraft, bodyFormData, {
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //       ...authHeaders,
    //     },
    //   })
    //   .then(res => {
    //     setLoading(false);
    //     setDraftCourseId(res.data.data.draftCourseId);
    //     handleCourseStepTwo();
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
    handleCourseStepTwo();

  };

  const handleCourseStepOne = () => {
    setCourseStepOne(true);
    setCourseStepTwo(false);
    // setCourseStepThree(false);
  };

  const handleCourseStepTwo = () => {
    setCourseStepOne(false);
    setCourseStepTwo(true);
    // setCourseStepThree(false);
  };

  const goToCoursesList = () => {
    history.push('/my_courses');
  };

  const toggleHandler = index => {
    index === toggleReadView ? setToggleReadView(-1) : setToggleReadView(index);
    setToggleEditView(-1);
  };

  const editToggleHandler = (index, item) => {
    index === toggleEditView ? setToggleEditView(-1) : setToggleEditView(index);
    setToggleReadView(-1);
    setHeading(item.heading);
    setContent(item.description);
  };

  const toggleLessonHandler = index => {
    index === toggleLessonReadView ? setToggleLessonReadView(-1) : setToggleLessonReadView(index);
    setToggleLessonEditView(-1);
  };

  const editToggleLessonHandler = (index) => {
    index === toggleLessonEditView ? setToggleLessonEditView(-1) : setToggleLessonEditView(index);
    setToggleLessonReadView(-1);

  };

  const toggleLectureHandler = (lectureIndex, lessonIndex) => {
    const lessonsArray = _.cloneDeep(lessonsList)
    const lessonItem = lessonsArray[lessonIndex];
    lessonItem.savedLectureList[lectureIndex].readView = !lessonItem.savedLectureList[lectureIndex].readView;
    lessonItem.savedLectureList[lectureIndex].editView = false;
    setLessonsList(lessonsArray)
  };

  const editToggleLectureHandler = (lectureIndex, lessonIndex) => {
    const lessonsArray = _.cloneDeep(lessonsList)
    const lessonItem = lessonsArray[lessonIndex];
    lessonItem.savedLectureList[lectureIndex].editView = !lessonItem.savedLectureList[lectureIndex].editView;
    lessonItem.savedLectureList[lectureIndex].readView = false;

    setLessonsList(lessonsArray)

  };

  const updateLessonTitleHandler = (index) => {
    const item = { ...lessonsList[index] };
    item.name = lessonTitle;
    lessonsList[index] = item;
    setToggleLessonEditView(-1);
    setLessonTitle('');
  }

  const deleteLessonTitleHandler = (index) => {
    if (lessonsList.length === 1) {
      const list = [...lessonsList]
      list.splice(index, 1);
      setLessonsList(list);
      setHideBtns(true)
    }
    const list = [...lessonsList]
    list.splice(index, 1);
    setLessonsList(list);
  }


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
    axios.get(API + endpoints.courseCategory).then(res => {
      setLoading(false);
      setCategories(res.data.data);
      if (res.data.data.length > 0) {
        setCategoryType(1);
      }
    }).catch((err) => {
      setLoading(false)
    });
  }, []);

  const addDetailsSection = () => {
    const section = {
      heading,
      description: content,
    };

    setDetailsSection([...detailsSection, section]);
    setHeading('');
    setContent('');
    setNewSectionToggle(false);
  };

  const saveEditDetailsSection = index => {
    const item = { ...detailsSection[index] };
    item.heading = heading;
    item.description = content;
    detailsSection[index] = item;
    setToggleEditView(-1);
    setHeading('');
    setContent('');
  };

  const onDeleteSection = (e, index) => {
    e.preventDefault();
    const filterData = detailsSection.filter((res, ind) => ind !== index);
    setDetailsSection(filterData);
  };

  const handleLectureSection = () => {
    setAddLectureSection(true);
  };

  const handleQuizSection = (index) => {
    const lessonsArray = _.cloneDeep(lessonsList);
    const lessonItem = lessonsArray[index]
    console.log("Usman", index)
    lessonItem.showQuiz = true;
    setLessonsList(lessonsArray);
  };

  const saveLessonHandler = async () => {
    const data = {
      name: lessonTitle,
      courseId: draftCourseId,
      lessonId,
      lectureList: [],
      savedLectureList: [],
      showLecture: false,
      showQuiz: false,
      quiz: {
        questions: [],
        totalQuestions: null,

      }
    }
    // setLoading(true)
    // try {
    //   const res = await apiPostRequest(endpoints.createLectureAsDraft, data);
    //   if (!res) {
    //     throw 'No Internet Access'
    //   }
    //   if (res.status !== 201) {
    //     throw 'Something Went Wrong'
    //   }
    //   setLessonId(res.data.draftLessonId)
    //   setHideBtns(false);
    //   setShowBtns(true);
    //   const lessonsArray = [...lessonsList];
    //   lessonsArray.push(data);
    //   console.log(lessonsArray);
    //   setLessonTitle("")
    //   setLessonsList(lessonsArray);
    // } catch (err) {
    //   console.log(err);
    //   setLoading(false)
    // }
    setHideBtns(false);
    setShowBtns(true);
    const lessonsArray = [...lessonsList];
    lessonsArray.push(data);
    setLessonsList(lessonsArray);
    setLessonTitle("")

  };

  const saveLectureHandler = async (lectureIndex, lessonIndex) => {
    const lessonsArray = _.cloneDeep(lessonsList)
    const lessonItem = lessonsArray[lessonIndex];
    const payload = {
      title: lessonItem.lectureList[lectureIndex].title,
      lectureVideo: lessonItem.lectureList[lectureIndex].lectureVideo,
      lectureTime: lessonItem.lectureList[lectureIndex].lectureTime,
      lessonId: lessonItem.lessonId
    }
    // console.log(payload)
    // try {
    //   const res = await apiPostRequest(endpoints.createLectureAsDraft, payload);
    //   if (!res) {
    //     throw 'No Internet Access'
    //   }
    //   console.log(res);
    //   if (res.status !== 201) {
    //     throw 'Something Went Wrong'
    //   }
    //   lessonItem.lectureList[lectureIndex].id = res.data.data.draftLectureId
    //   lessonItem.savedLectureList.push(lessonItem.lectureList[lectureIndex])
    //   // lessonItem.lectureList.splice(lectureIndex, 1)
    //   console.log(lessonsArray)
    //   setLessonsList(lessonsArray);
    // } catch (err) {
    //   console.log(err);
    //   setLoading(false)
    // }
    lessonItem.lectureList[lectureIndex].id = 5
    lessonItem.savedLectureList.push(lessonItem.lectureList[lectureIndex])
    lessonItem.lectureList.splice(lectureIndex, 1)
    console.log(lessonsArray)
    setLessonsList(lessonsArray);

  }



  const addLectureChangeHandler = (e, lectureIndex, lessonIndex) => {
    const lessonsArray = _.cloneDeep(lessonsList);
    const lessonItem = lessonsArray[lessonIndex];
    if (lessonItem.savedLectureList.length > 0 && lessonItem.savedLectureList[lectureIndex].editView) {
      lessonItem.savedLectureList[lectureIndex].editableTitle = e.target.value
      setLessonsList(lessonsArray)
    } else {
      lessonItem.lectureList[lectureIndex].title = e.target.value
      lessonItem.lectureList[lectureIndex].editableTitle = e.target.value
      setLessonsList(lessonsArray)
    }

  };

  const removeLectureHandler = (lectureIndex, lessonIndex) => {
    const lessonsArray = _.cloneDeep(lessonsList);
    const lessonItem = lessonsArray[lessonIndex];
    if (lessonItem.lectureList.length === 1 && lessonItem.savedLectureList.length === 0) {
      lessonItem.lectureList.splice(lectureIndex, 1)
      lessonItem.showLecture = false;
      setLessonsList(lessonsArray)
    }
    lessonItem.lectureList.splice(lectureIndex, 1)
    setLessonsList(lessonsArray)
  };

  const addLectureHandler = (index) => {
    const lessonsArray = _.cloneDeep(lessonsList);
    const lessonItem = lessonsArray[index]
    lessonItem.showLecture = true;
    lessonItem.lectureList.push({
      title: "", lectureVideo: "",
      lectureTime: null, fileSelected: null, readView: false, editView: false, editableTiltle: ""
    })
    setLessonsList(lessonsArray);
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
                  <div className="add_form">
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
                              maxLength="60"
                              onChange={e => setTitle(e.target.value)}
                              placeholder="Enter Title"
                            />
                            <InputGroupAddon
                              addonType="prepend"
                              className="text_limit"
                            >
                              {titleLimit}
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
                              <div className="del_btn_container">
                                {courseVideo === '' ? (
                                  ''
                                ) : (
                                  <Button
                                    className="del_btn"
                                    onClick={() => {
                                      setCourseVideo('');
                                      dataVideo.courseVideo = null;
                                    }}
                                  >
                                    <MdDelete />
                                  </Button>
                                )}
                              </div>
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
                  <div className="add_form">
                    <div className="profileHeader">
                      <h3>Basic Info</h3>
                    </div>
                    <div className="createCourseCont">
                      {detailsSection.length === 0 && (
                        <div className="card mb-4">
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
                            </FormGroup>
                            <div className="sec_footer">
                              <div className="bottom_btns">
                                <Button className="btn_back">Cancel</Button>
                                <Button
                                  className="btn_save"
                                  onClick={addDetailsSection}
                                >
                                  Save Section
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {newSectionToggle && (
                        <div className="card mb-4">
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
                            </FormGroup>
                            <div className="sec_footer">
                              <div className="bottom_btns">
                                <Button
                                  className="btn_back"
                                  onClick={() => setNewSectionToggle(false)}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  className="btn_save"
                                  onClick={addDetailsSection}
                                >
                                  Save Section
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {detailsSection.length > 0 &&
                        detailsSection.map((item, index) => (
                          <div key={index} className="custom_accordin">
                            <div className="accordin_item">
                              <div className="accordin_header">
                                <div className="title">
                                  <Button
                                    className={
                                      accordinOne
                                        ? 'active title_btn'
                                        : 'title_btn'
                                    }
                                    onClick={() => toggleHandler(index)}
                                  >
                                    <div className="tick_icon">
                                      <MdCheckCircle />
                                    </div>
                                    {item.heading}
                                  </Button>
                                </div>
                                <div className="action_btns">
                                  <Button>
                                    <FiEdit3
                                      onClick={() =>
                                        editToggleHandler(index, item)
                                      }
                                    />
                                  </Button>
                                  <Button
                                    onClick={e => onDeleteSection(e, index)}
                                  >
                                    <MdDelete />
                                  </Button>
                                </div>
                              </div>
                              {toggleReadView === index && (
                                <div className="accordin_content">
                                  <div className="section_in">
                                    <FormGroup>
                                      <Label>Title</Label>
                                      <Input
                                        type="text"
                                        name="heading"
                                        value={item.heading}
                                        readOnly
                                      />
                                    </FormGroup>
                                    <FormGroup className="mt-4">
                                      <Label>Description</Label>
                                      <JoditEditor
                                        ref={notEditableEditor}
                                        value={item.description}
                                        config={JoditEditorReadOnlyConfig}
                                        tabIndex={0} // tabIndex of textarea
                                      />
                                    </FormGroup>
                                  </div>
                                </div>
                              )}
                              {toggleEditView === index && (
                                <div className="accordin_content">
                                  <div className="section_in">
                                    <FormGroup>
                                      <Label>Title</Label>
                                      <Input
                                        type="text"
                                        name="heading"
                                        value={heading}
                                        onChange={e =>
                                          setHeading(e.target.value)
                                        }
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
                                        onBlur={newContent =>
                                          setContent(newContent)
                                        } // preferred to use only this option to update the content for performance reasons
                                      />
                                    </FormGroup>
                                  </div>
                                  <div className="sec_footer">
                                    <div className="bottom_btns">
                                      <Button
                                        className="btn_back"
                                        onClick={() => setToggleEditView(-1)}
                                      >
                                        Cancel
                                      </Button>
                                      <Button
                                        className="btn_save"
                                        onClick={() =>
                                          saveEditDetailsSection(index)
                                        }
                                      >
                                        Save Section
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}

                      {detailsSection.length > 0 && (
                        <Button
                          type="button"
                          className="add_section"
                          onClick={() => setNewSectionToggle(true)}
                          disabled={newSectionToggle}
                        >
                          New Section
                        </Button>
                      )}
                      <div className="profileHeader mt-4">
                        <h3>Tags</h3>
                      </div>
                      <div className="card mt-4 mb-5">
                        <div className="card-body">
                          <FormGroup>
                            <Label for="price">
                              <FormattedMessage {...messages.AddTag} />
                            </Label>
                            <TagsComponent setTags={setTags} />
                          </FormGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_footer">
                    <div className="bottom_btns">
                      <Button className="btn_back" onClick={goToCoursesList}>
                        <FormattedMessage {...messages.Back} />
                      </Button>
                      <Button
                        className="btn_submit"
                        // disabled={!title || !price || loading}
                        onClick={createDraft}
                      // onClick={handleCourseStepTwo}
                      >
                        <FormattedMessage {...messages.Next} />
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {courseStepTwo && (
                <>
                  <div className="add_form">
                    <div className="profileHeader">
                      <h3>Lesson</h3>
                    </div>
                    <div className="createCourseCont">
                      {hideBtns && <div className="card mb-3">
                        <div className="card-body">
                          <Row>
                            <Col lg={12}>
                              <FormGroup>
                                <Label>Title</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Title"
                                  onChange={(e) => setLessonTitle(e.target.value)}
                                />
                              </FormGroup>
                            </Col>
                            <Col lg={12}>
                              <div className="sec_footer mb-4">
                                <div className="bottom_btns">
                                  <Button
                                    onClick={() => setHideBtns(false)}
                                    hidden={lessonsList.length === 0 ? true : false}
                                    className="btn_back">Cancel</Button>
                                  <Button
                                    className="btn_save"
                                    onClick={saveLessonHandler}
                                    disabled={!lessonTitle || loading}
                                  >
                                    Save Lesson
                                  </Button>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>}

                      {lessonsList.length > 0 && lessonsList.map((res, index) => (
                        <div key={index} className="custom_accordin_lesson">
                          <div className="accordin_item">
                            <div className="accordin_header">
                              <div className="top-layer">
                                <div className="title">
                                  <Button
                                    className={
                                      accordinOne
                                        ? 'active title_btn'
                                        : 'title_btn'
                                    }
                                    onClick={() => toggleLessonHandler(index)}
                                  >
                                    <div className="tick_icon">
                                      <MdCheckCircle />
                                    </div>
                                    <span> {res.name} </span>
                                  </Button>
                                </div>
                                <div className="action_btns">
                                  <Button>
                                    <FiEdit3
                                      onClick={() =>
                                        editToggleLessonHandler(index, res)
                                      }
                                    />
                                  </Button>
                                  <Button
                                    onClick={() => deleteLessonTitleHandler(index)}
                                  >
                                    <MdDelete />
                                  </Button>
                                </div>
                              </div>
                              <div className="add_lec_quiz">
                                <Button onClick={() => addLectureHandler(index)}>
                                  <FaVideo />
                                  Add Lecture
                                </Button>
                                <Button onClick={() => handleQuizSection(index)}>
                                  <RiQuestionnaireFill />
                                  Add Quiz
                                </Button>
                              </div>
                            </div>
                            {toggleLessonReadView === index && (
                              <div className="accordin_content">
                                <div className="section_in">
                                  <FormGroup>
                                    <Label>Title</Label>
                                    <Input
                                      type="text"
                                      name="heading"
                                      value={res.name}
                                      readOnly
                                    />
                                  </FormGroup>
                                </div>
                              </div>
                            )}
                            {toggleLessonEditView === index && (
                              <div className="accordin_content">
                                <div className="section_in">
                                  <FormGroup>
                                    <Label>Title</Label>
                                    <Input
                                      type="text"
                                      name="heading"
                                      value={lessonTitle}
                                      onChange={e =>
                                        setLessonTitle(e.target.value)
                                      }
                                      className="form-control"
                                      placeholder="Enter Title"
                                    />
                                  </FormGroup>
                                </div>
                                <div className="sec_footer">
                                  <div className="bottom_btns">
                                    <Button
                                      className="btn_back"
                                      onClick={() => setToggleLessonEditView(-1)}
                                    >
                                      Cancel
                                    </Button>
                                    <Button
                                      className="btn_save"
                                      onClick={() =>
                                        updateLessonTitleHandler(index)
                                      }
                                    >
                                      Save Section
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div>

                            </div>
                            <div hidden={!res.showLecture} className="accordin_content">
                              <div className="section_in">
                                {res.showLecture &&
                                  <>
                                    <AddLecture
                                      item={res}
                                      lessonsList={lessonsList}
                                      setLessonsList={setLessonsList}
                                      lessonIndex={index}
                                      addLectureChangeHandler={addLectureChangeHandler}
                                      removeLectureHandler={removeLectureHandler}
                                      saveLectureHandler={saveLectureHandler} />
                                    <LectureList
                                      res={res}
                                      lessonIndex={index}
                                      addLectureChangeHandler={addLectureChangeHandler}
                                      lessonsList={lessonsList}
                                      setLessonsList={setLessonsList}
                                      toggleLectureHandler={toggleLectureHandler}
                                      editToggleLectureHandler={editToggleLectureHandler} />
                                  </>
                                }
                              </div>
                            </div>
                            <div hidden={!res.showQuiz} className="accordin_content">
                              <div className="section_in">
                                {res.showQuiz && (
                                  <>
                                    <div className="quiz_footer">
                                      <Button type="button" className="add_btn">
                                        <IoMdChatboxes /> Add Question
                                      </Button>
                                    </div>
                                    <AddQuiz />
                                    {/* <QuestionList /> */}

                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {lessonsList.length > 0 &&
                        <Button type="button" className="add_section"
                          onClick={() => setHideBtns(true)}
                          disabled={hideBtns}>
                          Add Lesson
                        </Button>}
                    </div>
                  </div>
                  <div className="form_footer publishBtns">
                    <Button className="btn_back" onClick={handleCourseStepOne}>
                      <FormattedMessage {...messages.Back} />
                    </Button>
                    <div className="bottom_btns">
                      <Button
                        className="btn_back"
                        onClick={handleCourseStepOne}
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

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
  const [draftCourseId, setDraftCourseId] = useState(0);
  const [heading, setHeading] = useState('');
  const [detailsSection, setDetailsSection] = useState([]);
  const [tags, setTags] = useState([]);
  const [lectureVideo, setLectureVideo] = useState('');
  // const [category, setCategory] = useState('0');
  const [hideBtns, setHideBtns] = useState(true);
  const [showBtns, setShowBtns] = useState(false);
  const [addLectureSection, setAddLectureSection] = useState(false);
  const [addQuizSection, setAddQuizSection] = useState(false);
  const titleLimit = `${title.length}/60`;
  const lecVideo = { lectureVideo: '' };

  const setTagsFunc = tags => {
    // console.log("tags", tags);
  };
  // const [errors, setErrors] = useState({});
  const [courseStepOne, setCourseStepOne] = useState(true);
  const [courseStepTwo, setCourseStepTwo] = useState(false);
  // const [courseStepThree, setCourseStepThree] = useState(false);

  const [accordinOne, setAccordinOne] = useState(false);

  const [dataVideo, setDataVideo] = useState(null);

  const token = localStorage.getItem('token');
  const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
  const details = JSON.stringify(detailsSection);
  const staticTags = JSON.stringify(['Usman', 'Bilal']);
  const bodyFormData = new FormData();
  bodyFormData.append('title', title);
  bodyFormData.append('courseLanguage', language);
  bodyFormData.append('categoryId', categoryType);
  bodyFormData.append('courseLevel', level);
  bodyFormData.append('price', price);
  bodyFormData.append('promotionalVideo', dataVideo);
  bodyFormData.append('details', details);
  bodyFormData.append('tags', staticTags);

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
    const infoDetails = [...detailsSection];
    infoDetails.push(section);
    setDetailsSection(infoDetails);
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

  const handleQuizSection = () => {
    setAddQuizSection(true);
  };

  const handleShowBtns = () => {
    setHideBtns(false);
    setShowBtns(true);
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
                            <TagsComponent data={setTagsFunc} tags={tags} />
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
                        disabled={!title || !price || loading}
                        onClick={createDraft}
                      // onClick={handleCourseStepTwo}
                      >
                        <FormattedMessage {...messages.Next} />
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {/* {courseStepTwo && (
                <>
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
              )} */}
              {courseStepTwo && (
                <>
                  <div className="add_form">
                    <div className="profileHeader">
                      <h3>Lesson 1</h3>
                    </div>
                    <div className="createCourseCont">
                      <div className="card mb-3">
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
                            <Col lg={12}>
                              <div className="sec_footer mb-4">
                                {showBtns && (
                                  <div className="add_lec_quiz">
                                    <Button onClick={handleLectureSection}>
                                      <FaVideo />
                                      Add Lecture
                                    </Button>
                                    <Button onClick={handleQuizSection}>
                                      <RiQuestionnaireFill />
                                      Add Quiz
                                    </Button>
                                  </div>
                                )}
                                {hideBtns && (
                                  <div className="bottom_btns">
                                    <Button className="btn_back">Cancel</Button>
                                    <Button
                                      className="btn_save"
                                      onClick={handleShowBtns}
                                    >
                                      Save Section
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </Col>
                          </Row>
                          {addLectureSection && (
                            <>
                              <Row>
                                <Col lg={12}>
                                  <div className="profileHeader">
                                    <h3>Lecture</h3>
                                  </div>
                                </Col>
                              </Row>
                              <div className="add_lecture_list">
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
                                            className="upload_file"
                                            {...getRootProps()}
                                          >
                                            <input {...getInputProps()} />
                                            <div
                                              type="button"
                                              className="uploadBtn"
                                            >
                                              <span>
                                                <FiUpload />
                                              </span>
                                            </div>
                                            <p>
                                              <FormattedMessage
                                                {...messages.UploadVideo}
                                              />
                                            </p>
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
                                  </Col>
                                  <Col lg={12}>
                                    <div className="sec_footer">
                                      <div className="bottom_btns">
                                        <Button
                                          className="btn_back"
                                        // onClick={handleCourseStepOne}
                                        >
                                          Cancel
                                        </Button>
                                        <Button
                                          className="btn_save"
                                        // onClick={handleCourseStepThree}
                                        >
                                          Save Lecture
                                        </Button>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>

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
                                            className="upload_file"
                                            {...getRootProps()}
                                          >
                                            <input {...getInputProps()} />
                                            <div
                                              type="button"
                                              className="uploadBtn"
                                            >
                                              <span>
                                                <FiUpload />
                                              </span>
                                            </div>
                                            <p>
                                              <FormattedMessage
                                                {...messages.UploadVideo}
                                              />
                                            </p>
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
                                  </Col>
                                  <Col lg={12}>
                                    <div className="sec_footer">
                                      <div className="bottom_btns">
                                        <Button
                                          className="btn_back"
                                        // onClick={handleCourseStepOne}
                                        >
                                          Cancel
                                        </Button>
                                        <Button
                                          className="btn_save"
                                        // onClick={handleCourseStepThree}
                                        >
                                          Save Lecture
                                        </Button>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                              <Row>
                                <Col lg={12}>
                                  <div className="details_list mt-5">
                                    {/* {detailsSection.map((res, index) => ( */}
                                    <div className="item">
                                      <Button className="title_btn">
                                        <MdCheckCircle /> Lecture 1
                                      </Button>
                                      <div className="action_btns">
                                        <Button>
                                          <FiEdit3 />
                                        </Button>
                                        <Button
                                        // onClick={e => onDeleteSection(e, index)}
                                        >
                                          <MdDelete />
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="item">
                                      <Button className="title_btn">
                                        <MdCheckCircle /> Lecture 2
                                      </Button>
                                      <div className="action_btns">
                                        <Button>
                                          <FiEdit3 />
                                        </Button>
                                        <Button
                                        // onClick={e => onDeleteSection(e, index)}
                                        >
                                          <MdDelete />
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="item">
                                      <Button className="title_btn">
                                        <MdCheckCircle /> Lecture 3
                                      </Button>
                                      <div className="action_btns">
                                        <Button>
                                          <FiEdit3 />
                                        </Button>
                                        <Button
                                        // onClick={e => onDeleteSection(e, index)}
                                        >
                                          <MdDelete />
                                        </Button>
                                      </div>
                                    </div>
                                    {/* ))} */}
                                  </div>
                                </Col>
                              </Row>
                            </>
                          )}
                          {addQuizSection && (
                            <>
                              <div className="profileHeader">
                                <h3>Quiz</h3>
                              </div>
                              <div className="card mt-4 mb-5">
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
                                              <div className="check_quiz">
                                                <Input
                                                  className="radio"
                                                  type="radio"
                                                  id="age1"
                                                  name="age"
                                                  value="30"
                                                />
                                              </div>
                                              <Input
                                                placeholder="Answer 1"
                                                type="text"
                                              />
                                            </div>
                                            <div className="Answers">
                                              <div className="check_quiz">
                                                <Input
                                                  className="radio"
                                                  type="radio"
                                                  id="age2"
                                                  name="age"
                                                  value="60"
                                                />
                                              </div>
                                              <Input
                                                placeholder="Answer 2"
                                                type="text"
                                              />
                                            </div>
                                            <div className="Answers">
                                              <div className="check_quiz">
                                                <Input
                                                  className="radio"
                                                  type="radio"
                                                  id="age3"
                                                  name="age"
                                                  value="100"
                                                />
                                              </div>
                                              <Input
                                                placeholder="Answer 3"
                                                type="text"
                                              />
                                            </div>
                                          </div>
                                        </Col>
                                        <Col lg={12}>
                                          <div className="sec_footer mt-4">
                                            <div className="bottom_btns">
                                              <Button
                                                className="btn_back"
                                              // onClick={handleCourseStepOne}
                                              >
                                                Cancel
                                              </Button>
                                              <Button
                                                className="btn_save"
                                              // onClick={handleCourseStepThree}
                                              >
                                                Save Question
                                              </Button>
                                            </div>
                                          </div>
                                        </Col>
                                      </Row>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="details_list">
                                {/* {detailsSection.map((res, index) => ( */}
                                <div className="item">
                                  <Button className="title_btn">
                                    <MdCheckCircle /> Question 1
                                  </Button>
                                  <div className="action_btns">
                                    <Button>
                                      <FiEdit3 />
                                    </Button>
                                    <Button
                                    // onClick={e => onDeleteSection(e, index)}
                                    >
                                      <MdDelete />
                                    </Button>
                                  </div>
                                </div>
                                <div className="item">
                                  <Button className="title_btn">
                                    <MdCheckCircle /> Question 2
                                  </Button>
                                  <div className="action_btns">
                                    <Button>
                                      <FiEdit3 />
                                    </Button>
                                    <Button
                                    // onClick={e => onDeleteSection(e, index)}
                                    >
                                      <MdDelete />
                                    </Button>
                                  </div>
                                </div>
                                <div className="item">
                                  <Button className="title_btn">
                                    <MdCheckCircle /> Question 3
                                  </Button>
                                  <div className="action_btns">
                                    <Button>
                                      <FiEdit3 />
                                    </Button>
                                    <Button
                                    // onClick={e => onDeleteSection(e, index)}
                                    >
                                      <MdDelete />
                                    </Button>
                                  </div>
                                </div>
                                {/* ))} */}
                                <div className="quiz_footer">
                                  <Button type="button" className="add_btn">
                                    <IoMdChatboxes /> Add Question
                                  </Button>
                                  {/* <p>Question 5 of 5</p> */}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="details_list">
                        {/* {detailsSection.map((res, index) => ( */}
                        <div className="item">
                          <Button className="title_btn">
                            <MdCheckCircle /> Lesson 1
                          </Button>
                          <div className="action_btns">
                            <Button>
                              <FiEdit3 />
                            </Button>
                            <Button
                            // onClick={e => onDeleteSection(e, index)}
                            >
                              <MdDelete />
                            </Button>
                          </div>
                        </div>
                        {/* ))} */}
                      </div>
                      <Button type="button" className="add_section">
                        Add Lesson
                      </Button>
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

import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { FormattedMessage } from 'react-intl';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  FormText,
  Button,
} from 'reactstrap';
// import { FiCamera } from 'react-icons/fi';
import history from 'utils/history';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { toast } from 'react-toastify';
// ToastContainer,
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { MdDelete } from 'react-icons/md';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Img from '../../Img';
import Wrapper from './Wrapper';
import messages from './messages';
import { API, JoditEditorConfig } from '../../../config/config';
import { redirectToLogin } from '../../../utils/redirectToLogin';
import Sidebar from '../../student-panel/Sidebar';
import Upload from '../../../images/upload.png';
import TagsComponent from '../../CourseTag/TagsComponent';

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

function AddBootCamp() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [categoryType, setCategoryType] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [language, setLanguage] = useState('English');
  const [ticket, setTicket] = useState('Donation');
  const [price, setPrice] = useState('');
  const [courseVideo, setCourseVideo] = useState('');
  const [tags, setTags] = useState([]);

  const [dataVideo, setDataVideo] = useState(null);

  const [courseStepOne, setCourseStepOne] = useState(true);
  const [courseStepTwo, setCourseStepTwo] = useState(false);

  const handleCourseStepOne = () => {
    setCourseStepOne(true);
    setCourseStepTwo(false);
  };

  const handleCourseStepTwo = () => {
    setCourseStepOne(false);
    setCourseStepTwo(true);
  };

  const setTagsFunc = tags => {
    console.log(tags, '=========tags');
  };

  useEffect(() => {
    redirectToLogin();
  }, []);

  const [bootCampStatus, setbootCampStatus] = useState({
    mainTitle: '',
    subTitle: '',
    image: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    price: '',
    description: '',
    redirectionUrl: '',
  });

  const handleChangeEvent = event => {
    if (event.target.type === 'checkbox') {
      setbootCampStatus({
        ...bootCampStatus,
        [event.target.name]: event.target.checked,
      });
    } else if (event.target.type === 'file') {
      setbootCampStatus({
        ...bootCampStatus,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setbootCampStatus({
        ...bootCampStatus,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSave = () => {
    if (Object.keys(validator(bootCampStatus)).length > 0) {
      setErrors(validator(bootCampStatus));
      setTimeout(() => {
        setErrors({});
      }, 4000);
    } else {
      setLoader(true);
      const token = localStorage.getItem('token');
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
      const {
        mainTitle,
        subTitle,
        startDate,
        endDate,
        startTime,
        endTime,
        price,
        redirectionUrl,
      } = bootCampStatus;
      const subData = {
        mainTitle,
        subTitle,
        startDate,
        endDate,
        startTime,
        endTime,
        price,
        description: content,
        redirectionUrl,
      };

      const subDataString = encodeURIComponent(JSON.stringify(subData));
      const bodyFormData = new FormData();
      bodyFormData.append('type', 'Bootcamp');
      bodyFormData.append('eventImage', bootCampStatus.image);
      bodyFormData.append('redirectionUrl', bootCampStatus.redirectionUrl);
      bodyFormData.append('data', subDataString);
      axios
        .post(`${API}api/events`, bodyFormData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        })
        .then(response => {
          setContent('');
          setbootCampStatus({
            mainTitle: '',
            subTitle: '',
            image: {},
            startDate: '',
            endDate: '',
            startTime: '',
            endTime: '',
            price: '',
            description: '',
            redirectionUrl: '',
          });

          setLoader(false);
          toast.success(
            response && response.data.message
              ? response.data.message.toString()
              : 'Message Not Readable',
          );
          history.push('/bootcamps_list');
        })
        .catch(err => {
          setLoader(false);
          toast.error(
            err.response && err.response.data.message
              ? err.response.data.message.toString()
              : 'Message Not Readable',
          );
        });
    }
  };

  const validator = values => {
    const error = {};
    if (!values.mainTitle) {
      error.mainTitle = 'Title is required';
    } else if (!values.subTitle) {
      error.subTitle = 'Sub title is required';
    } else if (!values.image) {
      error.image = 'Image is required';
    } else if (!values.startDate) {
      error.startDate = 'Start Date  is required';
    } else if (!values.endDate) {
      error.endDate = 'End Date is required';
    } else if (!values.startTime) {
      error.startTime = 'Start Time is required';
    } else if (!values.endTime) {
      error.endTime = 'End time is required';
    } else if (!values.price) {
      error.price = 'Price is required';
    } else if (!values.redirectionUrl) {
      error.redirectionUrl = 'Redirection URL is required';
    } else if (!content) {
      error.description = 'Description is required';
    } else if (
      values.startDate &&
      values.endDate &&
      values.startDate > values.endDate
    ) {
      error.endDate = 'End Date Should be greater than Start Date';
    } else if (
      values.startTime &&
      values.endTime &&
      values.endDate === values.startDate &&
      values.startTime > values.endTime
    ) {
      error.endTime = 'End Time Should be greater than Start Time';
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.redirectionUrl)) {
      error.redirectionUrl = 'Redirection URL is invalid ';
    }
    return error;
  };

  return (
    <Wrapper>
      <div className="profilePages">
        <div className="profileMain">
          <Sidebar />
          {/* Create New Course Content */}
          <div className="profileContent">
            <div className="mainCont">
              {courseStepOne && (
                <>
                  <div className="profileHeader">
                    <h3>
                      <FormattedMessage {...messages.CreateNewBootcamp} />
                    </h3>
                  </div>
                  <div className="add_form">
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <FormGroup>
                          <Label for="title">
                            <FormattedMessage {...messages.Title} />
                          </Label>
                          <Input
                            type="text"
                            name="Title"
                            id="title"
                            placeholder="Enter Your Title"
                            value={bootCampStatus.mainTitle}
                            onChange={e => handleChangeEvent(e)}
                          />
                          <FormText color="danger">
                            {errors.mainTitle ? (
                              <p className="error"> {errors.mainTitle} </p>
                            ) : (
                              ''
                            )}
                          </FormText>
                          {/* <FormText color="danger">
  {errors.mainTitle ? (
    <p className="error"> {errors.mainTitle} </p>
  ) : (
    ''
  )}
</div> */}
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
                              {/* {categories.map(res => (
                                <MenuItem key={res.id} value={res.id}>
                                  {res.categoryName}
                                </MenuItem>
                              ))} */}
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
                        <FormGroup>
                          <FormControl fullWidth>
                            <Label>
                              <FormattedMessage {...messages.Ticket} />
                            </Label>
                            <Select
                              value={ticket}
                              onChange={e => {
                                setTicket(e.target.value);
                              }}
                              input={<BootstrapInput />}
                              fullWidth
                              name="ticket"
                              MenuProps={{
                                anchorOrigin: {
                                  vertical: 'bottom',
                                  horizontal: 'left',
                                },
                                getContentAnchorEl: null,
                              }}
                            >
                              <MenuItem value="Donation">Donation</MenuItem>
                              <MenuItem value="Paid">Paid</MenuItem>
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
                      <Col lg={6} md={6} sm={6} xs={12}>
                        <FormGroup>
                          <Label for="quantity">
                            <FormattedMessage {...messages.AvailableQuantity} />
                          </Label>
                          <Input
                            type="number"
                            name="Quantity"
                            id="quantity"
                            placeholder="Add Quantity"
                            // value={bootCampStatus.mainTitle}
                            onChange={e => handleChangeEvent(e)}
                          />
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
                  <div className="form_footer">
                    <div className="bottom_btns">
                      <Button className="btn_back">
                        <FormattedMessage {...messages.Back} />
                      </Button>
                      <Button
                        className="btn_submit"
                        // disabled={!title || !price || loading}
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
                  <div className="profileHeader">
                    <h3>
                      <FormattedMessage {...messages.BootcampContent} />
                    </h3>
                  </div>
                  <div className="add_form">
                    <Row>
                      <Col lg={12} md={12} sm={12} xs={12}>
                        <FormGroup>
                          <Label for="description">
                            <FormattedMessage {...messages.Description} />
                          </Label>
                          <JoditEditor
                            ref={editor}
                            value={content}
                            config={JoditEditorConfig}
                            tabIndex={0} // tabIndex of textarea
                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                          />
                          <FormText color="danger">
                            {errors.description ? (
                              <p className="error"> {errors.description} </p>
                            ) : (
                              ''
                            )}
                          </FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                    {/* <Col lg={6} md={6} sm={6} xs={12}>
                        <FormGroup>
                          <Label for="uploadimage">
                            <FormattedMessage {...messages.UploadImage} />
                          </Label>
                          <div className="camera">
                            <div className="form-control">
                              <p>
                                {bootCampStatus.image.name
                                  ? bootCampStatus.image.name
                                  : 'Upload Image'}
                              </p>
                              <div className="input--file">
                                <span>
                                  <FiCamera />
                                </span>
                                <input
                                  type="file"
                                  name="image"
                                  accept="image/png, image/gif, image/jpeg"
                                  id="uploadimage"
                                  placeholder="Upload Image"
                                  onChange={e => handleChangeEvent(e)}
                                />
                              </div>
                            </div>
                          </div>
                          <FormText color="danger">
                            {errors.image ? (
                              <p className="error"> {errors.image} </p>
                            ) : (
                              ''
                            )}
                          </FormText>
                        </FormGroup>
                      </Col> */}
                    <div className="profileHeader">
                      <h3>Date & Time</h3>
                    </div>
                    <div className="card mb-5">
                      <div className="card-body">
                        <Row>
                          <Col lg={6} md={6} sm={6} xs={12}>
                            <FormGroup>
                              <Label for="startdate">
                                <FormattedMessage {...messages.StartDate} />
                              </Label>
                              <Input
                                type="date"
                                name="startDate"
                                id="startdate"
                                placeholder="00/00/0000"
                                value={bootCampStatus.startDate}
                                onChange={e => handleChangeEvent(e)}
                              />
                              <FormText color="danger">
                                {errors.startDate ? (
                                  <p className="error"> {errors.startDate} </p>
                                ) : (
                                  ''
                                )}
                              </FormText>
                            </FormGroup>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={12}>
                            <FormGroup>
                              <Label for="starttime">
                                <FormattedMessage {...messages.StartTime} />
                              </Label>
                              <Input
                                type="time"
                                name="startTime"
                                id="starttime"
                                placeholder="00/00/0000"
                                value={bootCampStatus.startTime}
                                onChange={e => handleChangeEvent(e)}
                              />
                              <FormText color="danger">
                                {errors.startTime ? (
                                  <p className="error"> {errors.startTime} </p>
                                ) : (
                                  ''
                                )}
                              </FormText>
                            </FormGroup>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={12}>
                            <FormGroup>
                              <Label for="enddate">
                                <FormattedMessage {...messages.EndDate} />
                              </Label>
                              <Input
                                type="date"
                                name="endDate"
                                id="enddate"
                                placeholder="00/00/0000"
                                value={bootCampStatus.endDate}
                                onChange={e => handleChangeEvent(e)}
                              />
                              <FormText color="danger">
                                {errors.endDate ? (
                                  <p className="error"> {errors.endDate} </p>
                                ) : (
                                  ''
                                )}
                              </FormText>
                            </FormGroup>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={12}>
                            <FormGroup>
                              <Label for="endtime">
                                <FormattedMessage {...messages.EndTime} />
                              </Label>
                              <Input
                                type="time"
                                name="endTime"
                                id="endtime"
                                placeholder="00/00/0000"
                                value={bootCampStatus.endTime}
                                onChange={e => handleChangeEvent(e)}
                              />
                              <FormText color="danger">
                                {errors.endTime ? (
                                  <p className="error"> {errors.endTime} </p>
                                ) : (
                                  ''
                                )}
                              </FormText>
                            </FormGroup>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={12}>
                            <FormGroup>
                              <Label for="price">
                                <FormattedMessage {...messages.Price} />
                              </Label>
                              <Input
                                type="number"
                                name="price"
                                id="price"
                                placeholder="Enter Price"
                                value={bootCampStatus.price}
                                onChange={e => handleChangeEvent(e)}
                              />
                              <FormText color="danger">
                                {errors.price ? (
                                  <p className="error"> {errors.price} </p>
                                ) : (
                                  ''
                                )}
                              </FormText>
                            </FormGroup>
                          </Col>
                          <Col lg={6} md={6} sm={6} xs={12}>
                            <FormGroup>
                              <Label for="redirectionUrl">
                                <FormattedMessage {...messages.LiveLink} />
                              </Label>
                              <Input
                                type="text"
                                name="redirectionUrl"
                                id="redirectionUrl"
                                placeholder="e.g https://www.google.com/"
                                value={bootCampStatus.redirectionUrl}
                                onChange={e => handleChangeEvent(e)}
                              />
                              <FormText color="danger">
                                {errors.redirectionUrl ? (
                                  <p className="error"> {errors.redirectionUrl} </p>
                                ) : (
                                  ''
                                )}
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="profileHeader">
                      <h3>Bootcamp Tags</h3>
                    </div>
                    <div className="card mb-5">
                      <div className="card-body">
                        <Row>
                          <Col lg={12} md={12} sm={12} xs={12}>
                            <FormGroup>
                              <Label for="price">
                                <FormattedMessage {...messages.AddTag} />
                              </Label>
                              <TagsComponent data={setTagsFunc} tags={tags} />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                  <div className="form_footer">
                    <div className="bottom_btns">
                      <Button className="btn_back" onClick={handleCourseStepOne}>
                        <FormattedMessage {...messages.Back} />
                      </Button>
                      <Button
                        className="btn_submit"
                      // disabled={!title || !price || loading}
                      // onClick={createDraft}
                      >
                        <FormattedMessage {...messages.Submit} />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper >
  );
}

export default AddBootCamp;

import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { FormattedMessage } from 'react-intl';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from 'reactstrap';
import { FiCamera } from 'react-icons/fi';
import axios from 'axios';
import history from 'utils/history';
import { ToastContainer, toast } from 'react-toastify';
import Wrapper from './Wrapper';
import messages from './messages';
import { API, JoditEditorConfig } from '../../../config/config';
import { redirectToLogin } from '../../../utils/redirectToLogin';

function AddHackathon() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    redirectToLogin();
  }, []);

  const [hackathonStatus, sethackathonStatus] = useState({
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
      sethackathonStatus({
        ...hackathonStatus,
        [event.target.name]: event.target.checked,
      });
    } else if (event.target.type === 'file') {
      sethackathonStatus({
        ...hackathonStatus,
        [event.target.name]: event.target.files[0],
      });
    } else {
      sethackathonStatus({
        ...hackathonStatus,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSave = () => {
    if (Object.keys(validator(hackathonStatus)).length > 0) {
      setErrors(validator(hackathonStatus));
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
      } = hackathonStatus;
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
      bodyFormData.append('type', 'Hackathon');
      bodyFormData.append('eventImage', hackathonStatus.image);
      bodyFormData.append('data', subDataString);
      bodyFormData.append('redirectionUrl', hackathonStatus.redirectionUrl);
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
          sethackathonStatus({
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
          history.push('/hackathons_list');
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
      error.price = 'Price is required ';
    } else if (!values.redirectionUrl) {
      error.redirectionUrl = 'Redirection URL is required ';
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
    <>
      <Wrapper>
        <div className="add_forms">
          <p>
            <FormattedMessage {...messages.AllFields} />
          </p>
          <div className="add_form">
            <Row>
              <Col lg={4} md={6} sm={6} xs={12}>
                <FormGroup>
                  <Label for="maintitle">
                    <FormattedMessage {...messages.MainTitle} />
                  </Label>
                  <Input
                    type="text"
                    name="mainTitle"
                    id="maintitle"
                    placeholder="Enter Your Title"
                    value={hackathonStatus.mainTitle}
                    onChange={e => handleChangeEvent(e)}
                  />
                  <FormText color="danger">
                    {errors.mainTitle ? (
                      <p className="error"> {errors.mainTitle} </p>
                    ) : (
                      ''
                    )}
                  </FormText>
                </FormGroup>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <FormGroup>
                  <Label for="subtitle">
                    <FormattedMessage {...messages.SubTitle} />
                  </Label>
                  <Input
                    type="text"
                    name="subTitle"
                    id="subtitle"
                    placeholder="Enter Your Sub Title"
                    value={hackathonStatus.subTitle}
                    onChange={e => handleChangeEvent(e)}
                  />
                  <FormText color="danger">
                    {errors.subTitle ? (
                      <p className="error"> {errors.subTitle} </p>
                    ) : (
                      ''
                    )}
                  </FormText>
                </FormGroup>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <FormGroup>
                  <Label for="uploadimage">
                    <FormattedMessage {...messages.UploadImage} />
                  </Label>
                  <div className="camera">
                    <div className="form-control">
                      <p>
                        {hackathonStatus.image.name
                          ? hackathonStatus.image.name
                          : 'Upload Image'}
                      </p>
                      <div className="input--file">
                        <span>
                          <FiCamera />
                        </span>
                        <input
                          type="file"
                          accept="image/png, image/gif, image/jpeg"
                          name="image"
                          id="uploadimage"
                          placeholder="Upload Image"
                          onChange={e => handleChangeEvent(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <FormText color="danger">
                    {errors.image ? (
                      <p className="error">{errors.image} </p>
                    ) : (
                      ''
                    )}
                  </FormText>
                </FormGroup>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <FormGroup>
                  <Label for="startdate">
                    <FormattedMessage {...messages.StartDate} />
                  </Label>
                  <Input
                    type="date"
                    name="startDate"
                    id="startdate"
                    placeholder="00/00/0000"
                    value={hackathonStatus.startDate}
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
              <Col lg={4} md={6} sm={6} xs={12}>
                <FormGroup>
                  <Label for="enddate">
                    <FormattedMessage {...messages.EndDate} />
                  </Label>
                  <Input
                    type="date"
                    name="endDate"
                    id="enddate"
                    placeholder="00/00/0000"
                    value={hackathonStatus.endDate}
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
              <Col lg={4} md={6} sm={6} xs={12}>
                <FormGroup>
                  <Label for="starttime">
                    <FormattedMessage {...messages.StartTime} />
                  </Label>
                  <Input
                    type="time"
                    name="startTime"
                    id="starttime"
                    placeholder="00/00/0000"
                    value={hackathonStatus.startTime}
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
              <Col lg={4} md={6} sm={6} xs={12}>
                <FormGroup>
                  <Label for="endtime">
                    <FormattedMessage {...messages.EndTime} />
                  </Label>
                  <Input
                    type="time"
                    name="endTime"
                    id="endtime"
                    placeholder="00/00/0000"
                    value={hackathonStatus.endTime}
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
              <Col lg={4} md={6} sm={6} xs={12}>
                <FormGroup>
                  <Label for="price">
                    <FormattedMessage {...messages.Price} />
                  </Label>
                  <Input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter Price"
                    value={hackathonStatus.price}
                    onChange={e => handleChangeEvent(e)}
                  />
                  <FormText color="danger">
                    {errors.price ? (
                      <p className="error">{errors.price} </p>
                    ) : (
                      ''
                    )}
                  </FormText>
                </FormGroup>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <FormGroup>
                  <Label for="redirectionUrl">
                    <FormattedMessage {...messages.RedirectionUrl} />
                  </Label>
                  <Input
                    type="text"
                    name="redirectionUrl"
                    id="redirectionUrl"
                    placeholder="e.g https://www.google.com/"
                    value={hackathonStatus.redirectionUrl}
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
          </div>
          <div className="form_footer">
            <div className="bottom_btns">
              {/* <Button className="btn_save" onClick={e => handleSave(e)}>
              {loader ? 'Loading' : <FormattedMessage {...messages.SaveAs} />}
            </Button> */}
              <Button className="btn_submit" onClick={e => handleSave(e)}>
                {loader ? (
                  'Loading'
                ) : (
                  <FormattedMessage {...messages.SubmitContinue} />
                )}
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
      <ToastContainer />
    </>
  );
}

export default AddHackathon;

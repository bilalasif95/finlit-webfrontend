import React, { useState, useRef } from 'react';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wrapper from './Wrapper';
import messages from './messages';
import { API } from '../../../config/config';

function AddArticle() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);

  const config = {
    readonly: false,
  };
  const [articleStatus, setArticleStatus] = useState({
    mainTitle: '',
    subTitle: '',
    image: '',
    description: '',
  });

  const handleChangeEvent = event => {
    if (event.target.type === 'file') {
      setArticleStatus({
        ...articleStatus,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setArticleStatus({
        ...articleStatus,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSave = () => {
    if (Object.keys(validator(articleStatus)).length > 0) {
      setErrors(validator(articleStatus));
      setTimeout(() => {
        setErrors({});
      }, 4000);
    } else {
      setLoader(true);
      articleStatus.description = content;
      const token = localStorage.getItem('token');
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
      const bodyFormData = new FormData();
      bodyFormData.append('title', articleStatus.mainTitle);
      bodyFormData.append('subTitle', articleStatus.subTitle);
      bodyFormData.append('articleImage', articleStatus.image);
      bodyFormData.append('description', articleStatus.description);
      axios
        .post(`${API}api/article`, bodyFormData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        })
        .then(response => {
          setContent('');
          setArticleStatus({
            mainTitle: '',
            subTitle: '',
            image: {},
            description: '',
          });
          setLoader(false);
          toast.success(
            response && response.data.message
              ? response.data.message.toString()
              : 'Message Not Readable',
          );
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
      error.subTitle = 'Sub Title is required';
    } else if (!values.image) {
      error.image = 'Image is required';
    } else if (!content) {
      error.description = 'Description is required';
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
                    value={articleStatus.mainTitle}
                    placeholder="Main title"
                    onChange={e => handleChangeEvent(e)}
                  />
                  <FormText color="danger">
                    {errors.mainTitle ? (
                      <p className="error">{errors.mainTitle}</p>
                    ) : null}
                  </FormText>
                </FormGroup>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <FormGroup>
                  <Label for="maintitle">
                    <FormattedMessage {...messages.SubTitle} />
                  </Label>
                  <Input
                    type="text"
                    name="subTitle"
                    id="subtitle"
                    value={articleStatus.subTitle}
                    placeholder="Sub title"
                    onChange={e => handleChangeEvent(e)}
                  />
                  <FormText color="danger">
                    {errors.subTitle ? (
                      <p className="error">{errors.subTitle}</p>
                    ) : null}
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
                        {articleStatus.image.name
                          ? articleStatus.image.name
                          : 'Upload Image'}
                      </p>
                      <div className="input--file">
                        <span>
                          <FiCamera />
                        </span>
                        <input
                          type="file"
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
                      <p className="error"> {errors.image} </p>
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
                    config={config}
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
            <div className="form_footer">
              <div className="bottom_btns">
                {/* <Button className="btn_save" onClick={e => handleSave(e)}>
                  {loader ? (
                    'Loading'
                  ) : (
                    <FormattedMessage {...messages.SaveAs} />
                  )}
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
        </div>
      </Wrapper>
      <ToastContainer />
    </>
  );
}

export default AddArticle;

import React, { useState, useRef } from 'react';
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
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { IoMdAttach, IoIosClose } from 'react-icons/io';
import { MdPhotoLibrary } from 'react-icons/md';
import { FaVideo } from 'react-icons/fa';
import Dropzone from 'react-dropzone';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Wrapper from './Wrapper';
import messages from './messages';
import { JoditEditorConfig } from '../../../config/config';
import 'react-accessible-accordion/dist/fancy-example.css';
import TagsComponent from '../../Tag/TagsComponent';

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

function AddCourse() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [language, setLanguage] = useState('0');
  const [category, setCategory] = useState('0');
  const [courseImage, setCourseImage] = useState('');
  const [courseVideo, setCourseVideo] = useState('');
  const data = { courseImage: '' };
  const dataVideo = { courseVideo: '' };

  return (
    <Wrapper>
      <div className="add_forms">
        {/* <p>
          <FormattedMessage {...messages.AllFields} />
        </p> */}
        <div className="add_form">
          <Row>
            <Col lg={12}>
              <Accordion preExpanded={['a']}>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <FormattedMessage {...messages.AboutCourse} />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Row>
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <FormGroup>
                          <Label for="maintitle">
                            <FormattedMessage {...messages.MainTitle} />
                          </Label>
                          <Input
                            type="text"
                            name="maintitle"
                            id="maintitle"
                            placeholder="Enter Your Title"
                          />
                          <FormText>
                            <div className="error">
                              {/* <span>Error message</span> */}
                            </div>
                            <span>0/60</span>
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
                            name="subtitle"
                            id="subtitle"
                            placeholder="Enter Your Sub Title"
                          />
                          <FormText>
                            <div className="error">
                              {/* <span>Error message</span> */}
                            </div>
                            <span>0/60</span>
                          </FormText>
                        </FormGroup>
                      </Col>
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <FormGroup>
                          <FormControl fullWidth>
                            <Label>
                              <FormattedMessage {...messages.CourseLanguage} />
                            </Label>
                            <Select
                              value={language}
                              onChange={e => setLanguage(e.target.value)}
                              input={<BootstrapInput />}
                              fullWidth
                              MenuProps={{
                                anchorOrigin: {
                                  vertical: 'bottom',
                                  horizontal: 'left',
                                },
                                getContentAnchorEl: null,
                              }}
                            >
                              <MenuItem value={0}>Select Language</MenuItem>
                              <MenuItem value={1}>USA</MenuItem>
                              <MenuItem value={2}>KSA</MenuItem>
                              <MenuItem value={3}>KR</MenuItem>
                            </Select>
                          </FormControl>
                        </FormGroup>
                      </Col>
                      <Col lg={4} md={6} sm={6} xs={12}>
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
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <FormGroup>
                          <Label for="category">
                            <FormattedMessage {...messages.CourseCategory} />
                          </Label>
                          {/* <Input
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Select Category"
                          /> */}
                          <Select
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            input={<BootstrapInput />}
                            fullWidth
                            MenuProps={{
                              anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left',
                              },
                              getContentAnchorEl: null,
                            }}
                          >
                            <MenuItem value={0}>Select Category</MenuItem>
                            <MenuItem value={1}>Category 1</MenuItem>
                            <MenuItem value={2}>Category 2</MenuItem>
                            <MenuItem value={3}>Category 3</MenuItem>
                            <MenuItem value={4}>Category 4</MenuItem>
                            <MenuItem value={5}>Category 5</MenuItem>
                          </Select>
                          {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
                        </FormGroup>
                      </Col>
                      <Col lg={4} md={6} sm={6} xs={12}>
                        <FormGroup>
                          <Label for="price">
                            <FormattedMessage {...messages.AddTag} />
                          </Label>
                          <TagsComponent data={{ tags: [] }} tags={[]} />
                          {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
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
                          <FormText>
                            <div className="error">
                              {/* <span>Error message</span> */}
                            </div>
                            <span>0/5000</span>
                          </FormText>
                        </FormGroup>
                      </Col>
                      {/* <Col lg={6}>
                        <p>Preview:</p>
                        <div>
                          <div>
                            <div>
                              {logo === "" ? (
                                'dummy'
                              ) : (
                                <img src={data.logo ? typeof data.logo === "string" ? data.logo : logo : logo} />
                              )}
                            </div>
                          </div>

                          <div>
                            <Dropzone
                              accept="image/*"
                              multiple={false}
                              onDrop={acceptedFiles => {
                                if (acceptedFiles && acceptedFiles[0]) {
                                  data.logo = acceptedFiles[0];
                                  // setLogoFile(acceptedFiles[0]);
                                  const reader = new FileReader();
                                  reader.onload = e => {
                                    setLogo(e.target.result);
                                  };
                                  reader.readAsDataURL(acceptedFiles[0]);
                                }
                              }}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <section>
                                  <div {...getRootProps()}>
                                    <input {...getInputProps()} />

                                    <p>Drag and drop an image here or click</p>
                                    'file upload img'
                                  </div>
                                </section>
                              )}
                            </Dropzone>
                          </div>
                        </div>
                        <button onClick={() => { setLogo(""); data.logo = null }}>
                          Remove
                        </button>
                      </Col> */}
                      <Col lg={6} md={6} sm={6} xs={12}>
                        <div className="graphics">
                          {courseImage === '' ? (
                            <div className="view_graphic">
                              <MdPhotoLibrary />
                            </div>
                          ) : (
                            <div className="view_graphic">
                              <button
                                onClick={() => {
                                  setCourseImage('');
                                  data.courseImage = null;
                                }}
                                className="del_btn"
                              >
                                <IoIosClose />
                              </button>
                              <img
                                src={
                                  data.courseImage
                                    ? typeof data.courseImage === 'string'
                                      ? data.courseImage
                                      : courseImage
                                    : courseImage
                                }
                              />
                            </div>
                          )}
                          <FormGroup>
                            <Label for="uploadimage">
                              <FormattedMessage {...messages.CourseImage} />
                            </Label>
                            <Dropzone
                              accept="image/*"
                              multiple={false}
                              onDrop={acceptedFiles => {
                                if (acceptedFiles && acceptedFiles[0]) {
                                  data.courseImage = acceptedFiles[0];
                                  // setLogoFile(acceptedFiles[0]);
                                  const reader = new FileReader();
                                  reader.onload = e => {
                                    setCourseImage(e.target.result);
                                  };
                                  reader.readAsDataURL(acceptedFiles[0]);
                                }
                              }}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div className="camera" {...getRootProps()}>
                                  <input {...getInputProps()} />
                                  <div className="form-control">
                                    <p>Upload Image</p>
                                    <span>
                                      <IoMdAttach />
                                    </span>
                                  </div>
                                </div>
                              )}
                            </Dropzone>
                          </FormGroup>
                        </div>
                      </Col>
                      <Col lg={6} md={6} sm={6} xs={12}>
                        <div className="graphics">
                          {courseVideo === '' ? (
                            <div className="view_graphic">
                              <FaVideo />
                            </div>
                          ) : (
                            <div className="view_graphic">
                              <button
                                onClick={() => {
                                  setCourseVideo('');
                                  data.courseVideo = null;
                                }}
                                className="del_btn"
                              >
                                <IoIosClose />
                              </button>
                              <video
                                src={
                                  dataVideo.courseVideo
                                    ? typeof dataVideo.courseVideo === 'string'
                                      ? dataVideo.courseVideo
                                      : courseVideo
                                    : courseVideo
                                }
                              />
                            </div>
                          )}
                          <FormGroup>
                            <Label>
                              <FormattedMessage {...messages.DemoVideo} />
                            </Label>
                            <Dropzone
                              accept="video/*"
                              multiple={false}
                              onDrop={acceptedFiles => {
                                if (acceptedFiles && acceptedFiles[0]) {
                                  dataVideo.courseVideo = acceptedFiles[0];
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
                                  <div className="form-control">
                                    <p>Upload Video</p>
                                    <div>
                                      <IoMdAttach />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Dropzone>
                          </FormGroup>
                        </div>
                      </Col>
                    </Row>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <FormattedMessage {...messages.AboutLecture} />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    tab content 2
                    {/* <div className="add_forms">
                      <h4>
                        <FormattedMessage {...messages.Lecture} />
                      </h4>
                      <p>
                        <FormattedMessage {...messages.AllFields} />
                      </p>
                      <div className="add_form">
                        <Row>
                          <Col lg={4} md={6} sm={6} xs={12}>
                            <FormGroup>
                              <Label for="lec_title">
                                <FormattedMessage {...messages.LectureTitle} />
                              </Label>
                              <Input
                                type="text"
                                name="title"
                                id="lec_title"
                                placeholder="Enter Your title"
                              />
                              <FormText color="danger">
          <p className="error"> Error message</p>
        </FormText>
                            </FormGroup>
                          </Col>
                          <Col lg={4} md={6} sm={6} xs={12}>
                            <FormGroup>
                              <Label for="sub_title">
                                <FormattedMessage {...messages.SubTitle} />
                              </Label>
                              <Input
                                type="text"
                                name="title"
                                id="sub_title"
                                placeholder="Enter Your Sub title"
                              />
                              <FormText color="danger">
          <p className="error"> Error message</p>
        </FormText>
                            </FormGroup>
                          </Col>
                          <Col lg={4} md={6} sm={6} xs={12}>
                            <FormGroup>
                              <Label for="uploadvideo">
                                <FormattedMessage {...messages.LectureVideo} />
                              </Label>
                              <div className="camera">
                                <div className="form-control">
                                  <p>Upload Video</p>
                                  <div className="input--file">
                                    <span>
                                      <IoMdAttach />
                                    </span>
                                    <input
                                      type="file"
                                      name="uploadvideo"
                                      id="uploadvideo"
                                      placeholder="Upload Video"
                                    />
                                  </div>
                                </div>
                              </div>
                              <FormText color="danger">
          <p className="error"> Error message</p>
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
                              // {/* onChange={newContent => { }} 
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </div> */}
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </Col>
          </Row>
          <div className="form_footer">
            <div className="bottom_btns">
              <Button className="btn_save">
                <FormattedMessage {...messages.SaveAs} />
              </Button>
              <Button className="btn_submit">
                <FormattedMessage {...messages.Publish} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AddCourse;

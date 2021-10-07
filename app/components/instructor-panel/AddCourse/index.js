import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { FormattedMessage } from 'react-intl';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  // FormText,
  Button,
} from 'reactstrap';
import { FiCamera } from 'react-icons/fi';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Wrapper from './Wrapper';
import messages from './messages';
import { JoditEditorConfig } from '../../../config/config';

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
    padding: '10px 26px 10px 12px',
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

  return (
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
                  name="maintitle"
                  id="maintitle"
                  placeholder="Enter Your Title"
                />
                {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
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
                {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
              </FormGroup>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
              <FormGroup>
                <Label for="uploadimage">
                  <FormattedMessage {...messages.UploadImage} />
                </Label>
                <div className="camera">
                  <div className="form-control">
                    <p>Upload Image</p>
                    <div className="input--file">
                      <span>
                        <FiCamera />
                      </span>
                      <input
                        type="file"
                        name="uploadimage"
                        id="uploadimage"
                        placeholder="Upload Image"
                      />
                    </div>
                  </div>
                </div>
                {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
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
              <FormGroup>
                <Label for="price">
                  <FormattedMessage {...messages.Price} />
                </Label>
                <Input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Enter Price"
                />
                {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
              </FormGroup>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
              <FormGroup>
                <Label for="category">
                  <FormattedMessage {...messages.Category} />
                </Label>
                <Input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Select Category"
                />
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
                {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
              </FormGroup>
            </Col>
          </Row>
        </div>
      </div>
      <div className="add_forms">
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
                {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
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
                {/* <FormText color="danger">
                  <p className="error"> Error message</p>
                </FormText> */}
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
                        <FiCamera />
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
                {/* onChange={newContent => { }} */}
              </FormGroup>
            </Col>
          </Row>
          <div className="form_footer">
            <div className="top_btns">
              <Button className="btn_add">
                <FormattedMessage {...messages.Add} />
              </Button>
              <Button className="btn_del">
                <FormattedMessage {...messages.Delete} />
              </Button>
            </div>
            <div className="bottom_btns">
              <Button className="btn_save">
                <FormattedMessage {...messages.SaveAs} />
              </Button>
              <Button className="btn_submit">
                <FormattedMessage {...messages.SubmitContinue} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AddCourse;

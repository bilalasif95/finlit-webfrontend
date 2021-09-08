/*
 * BootCamp Filters Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormGroup, Label, Row, Col } from 'reactstrap';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import messages from './messages';
import Wrapper from './Wrapper';

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
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Lato font.
    fontFamily: ['Lato', 'sans-serif'].join(','),
    '&:focus': {
      borderRadius: 4,
    },
  },
}))(InputBase);

function BootCampFilters() {
  const [courses, setCourses] = useState('0');
  const [coursesType, setCoursesType] = useState('0');
  const [language, setLanguage] = useState('0');
  const [level, setLevel] = useState('0');
  const handleChangeCourses = event => {
    setCourses(event.target.value);
  };
  const handleChangeCoursesType = event => {
    setCoursesType(event.target.value);
  };
  const handleChangeLanguage = event => {
    setLanguage(event.target.value);
  };
  const handleChangeLevel = event => {
    setLevel(event.target.value);
  };
  return (
    <Wrapper id="filters">
      <Row>
        <Col lg={12}>
          <div className="course_filters">
            <FormGroup>
              <FormControl fullWidth>
                <Label>
                  <FormattedMessage {...messages.Courses} />
                </Label>
                <Select
                  value={courses}
                  onChange={handleChangeCourses}
                  input={<BootstrapInput />}
                  fullWidth
                  defaultValue={0}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  <MenuItem value={0}>English</MenuItem>
                  <MenuItem value={1}>React</MenuItem>
                  <MenuItem value={2}>Node</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl fullWidth>
                <Label>
                  <FormattedMessage {...messages.CoursesType} />
                </Label>
                <Select
                  value={coursesType}
                  onChange={handleChangeCoursesType}
                  input={<BootstrapInput />}
                  fullWidth
                  defaultValue={0}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  <MenuItem value={0}>High</MenuItem>
                  <MenuItem value={1}>Medium</MenuItem>
                  <MenuItem value={2}>Low</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl fullWidth>
                <Label>
                  <FormattedMessage {...messages.Language} />
                </Label>
                <Select
                  value={language}
                  onChange={handleChangeLanguage}
                  input={<BootstrapInput />}
                  fullWidth
                  defaultValue={0}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  <MenuItem value={0}>English</MenuItem>
                  <MenuItem value={1}>Korean</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl fullWidth>
                <Label>
                  <FormattedMessage {...messages.Level} />
                </Label>
                <Select
                  value={level}
                  onChange={handleChangeLevel}
                  input={<BootstrapInput />}
                  fullWidth
                  defaultValue={0}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left',
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  <MenuItem value={0}>Level 1</MenuItem>
                  <MenuItem value={1}>Level 2</MenuItem>
                  <MenuItem value={2}>Level 3</MenuItem>
                  <MenuItem value={3}>Level 4</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
            {/* <FormGroup>
              <Label for="price">
                <FormattedMessage {...messages.Price} />
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                  placeholder=""
                  min={0}
                  max={100}
                  type="number"
                  name="price"
                  id="price"
                  step="1"
                />
              </InputGroup>
            </FormGroup> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className="total_results">
            Showing 200 total results for BootCamp
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default BootCampFilters;

/*
 * Create New Course Page Messages
 *
 * This contains all the text for the Create New Course Page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.CreateNewCoursePage';

export default defineMessages({
  CreateNewCourse: {
    id: `${scope}.CreateNewCourse`,
    defaultMessage: 'Create New Course',
  },
  CourseTitle: {
    id: `${scope}.CourseTitle`,
    defaultMessage: 'Course Title',
  },
  CategoryType: {
    id: `${scope}.CategoryType`,
    defaultMessage: 'Category Type',
  },
  Level: {
    id: `${scope}.Level`,
    defaultMessage: 'Level',
  },
  Language: {
    id: `${scope}.Language`,
    defaultMessage: 'Language',
  },
  Price: {
    id: `${scope}.Price`,
    defaultMessage: 'Price',
  },
  UploadIntroVideo: {
    id: `${scope}.UploadIntroVideo`,
    defaultMessage: 'Upload Introduction Video',
  },
  DragDrop: {
    id: `${scope}.DragDrop`,
    defaultMessage: `Drag and drop your video here, or use the button below`,
  },
  UploadVideo: {
    id: `${scope}.UploadVideo`,
    defaultMessage: 'Upload Video',
  },
  DeleteVideo: {
    id: `${scope}.DeleteVideo`,
    defaultMessage: 'Delete Video',
  },
  Back: {
    id: `${scope}.Back`,
    defaultMessage: 'Back',
  },
  Save: {
    id: `${scope}.Save`,
    defaultMessage: 'Save',
  },
  Next: {
    id: `${scope}.Next`,
    defaultMessage: 'Next',
  },
});

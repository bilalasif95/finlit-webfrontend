/*
 * Add Course Messages
 *
 * This contains all the text for the Add Course component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.AddCourse';

export default defineMessages({
  AddCourse: {
    id: `${scope}.AddCourse`,
    defaultMessage: `Add Course`,
  },
  AllFields: {
    id: `${scope}.AllFields`,
    defaultMessage: `All fields marked with * are mandatory`,
  },
  MainTitle: {
    id: `${scope}.MainTitle`,
    defaultMessage: `Main Title*`,
  },
  SubTitle: {
    id: `${scope}.SubTitle`,
    defaultMessage: `Sub Title*`,
  },
  UploadImage: {
    id: `${scope}.UploadImage`,
    defaultMessage: `Upload Image*`,
  },
  CourseLanguage: {
    id: `${scope}.CourseLanguage`,
    defaultMessage: `Course Language*`,
  },
  Price: {
    id: `${scope}.Price`,
    defaultMessage: `Price* ($)`,
  },
  Category: {
    id: `${scope}.Category`,
    defaultMessage: `Category*`,
  },
  Description: {
    id: `${scope}.Description`,
    defaultMessage: `Description`,
  },
  Lecture: {
    id: `${scope}.Lecture`,
    defaultMessage: `Lecture`,
  },
  LectureTitle: {
    id: `${scope}.LectureTitle`,
    defaultMessage: `Lecture Title*`,
  },
  LectureVideo: {
    id: `${scope}.LectureVideo`,
    defaultMessage: `Lecture Video`,
  },
  Add: {
    id: `${scope}.Add`,
    defaultMessage: `Add`,
  },
  Delete: {
    id: `${scope}.Delete`,
    defaultMessage: `Delete`,
  },
  SaveAs: {
    id: `${scope}.SaveAs`,
    defaultMessage: `Save as Draft`,
  },
  SubmitContinue: {
    id: `${scope}.SubmitContinue`,
    defaultMessage: `Submit & Continue`,
  },
});

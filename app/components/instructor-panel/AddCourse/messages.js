/*
 * Add Course Messages
 *
 * This contains all the text for the Add Course component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.AddCourse';

export default defineMessages({
  AboutCourse: {
    id: `${scope}.AboutCourse`,
    defaultMessage: `About Course`,
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
  CourseImage: {
    id: `${scope}.CourseImage`,
    defaultMessage: `Course Image*`,
  },
  DemoVideo: {
    id: `${scope}.DemoVideo`,
    defaultMessage: `Demo Video*`,
  },
  CourseLanguage: {
    id: `${scope}.CourseLanguage`,
    defaultMessage: `Course Language*`,
  },
  Price: {
    id: `${scope}.Price`,
    defaultMessage: `Price*`,
  },
  AddTag: {
    id: `${scope}.AddTag`,
    defaultMessage: `Add Tags* (Max. 4)`,
  },
  CourseCategory: {
    id: `${scope}.CourseCategory`,
    defaultMessage: `Course Category*`,
  },
  Description: {
    id: `${scope}.Description`,
    defaultMessage: `Description`,
  },
  AboutLecture: {
    id: `${scope}.AboutLecture`,
    defaultMessage: `About Lecture`,
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
  Publish: {
    id: `${scope}.Publish`,
    defaultMessage: `Publish`,
  },
});

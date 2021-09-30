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
    defaultMessage: `All fileds marked with * are mandatory`,
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
  StartDate: {
    id: `${scope}.StartDate*`,
    defaultMessage: `Starting Date`,
  },
  EndDate: {
    id: `${scope}.EndDate`,
    defaultMessage: `Ending Date*`,
  },
  StartTime: {
    id: `${scope}.StartTime`,
    defaultMessage: `Starting Time* (e.g HH:MM:AM)`,
  },
  EndTime: {
    id: `${scope}.EndTime`,
    defaultMessage: `Ending Time* (e.g HH:MM:AM)`,
  },
  AddPresenter: {
    id: `${scope}.AddPresenter`,
    defaultMessage: `Add Presenter*`,
  },
  PresenterName: {
    id: `${scope}.PresenterName`,
    defaultMessage: `Presenters Name`,
  },
  Price: {
    id: `${scope}.Price`,
    defaultMessage: `Price* ($)`,
  },
  RedirectionUrl: {
    id: `${scope}.redirectionUrl`,
    defaultMessage: `Redirection Url*`,
  },
  Description: {
    id: `${scope}.Description`,
    defaultMessage: `Description*`,
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

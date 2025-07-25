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
  Description: {
    id: `${scope}.Description`,
    defaultMessage: `Description*`,
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

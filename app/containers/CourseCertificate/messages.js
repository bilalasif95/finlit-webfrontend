/*
 * Course Certificate Messages
 *
 * This contains all the text for the Course Certificate.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.CourseCertificatePage';

export default defineMessages({
  FinLitAcademy: {
    id: `${scope}.FinLitAcademy`,
    defaultMessage: 'FinLit Professional Academy',
  },
  CertificateCompletion: {
    id: `${scope}.CertificateCompletion`,
    defaultMessage: `Certificate of Completion`,
  },
  ChangePassword: {
    id: `${scope}.ChangePassword`,
    defaultMessage: 'Change Password',
  },
  Desc: {
    id: `${scope}.Desc`,
    defaultMessage: `Aenean sed lorem est. Sed quis neque ut nibh suscipit
    imperdiet ac non augue. Aenean ornare sit amet lectus
    non tristique. Nunc ut volutpat lectus. Nulla 
    velit augue, pulvinar sed nisi sit amet, eleifend fermentum est.`,
  },
});

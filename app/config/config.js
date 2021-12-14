export const API = process.env.REACT_APP_API
  ? process.env.REACT_APP_API
  : 'https://dev-finlit-backend.rnssol.com/';

export const JoditEditorConfig = {
  statusbar: false,
  toolbarSticky: false,
  toolbarAdaptive: false,
  uploader: { insertImageAsBase64URI: true },
  buttons:
    'bold,italic,underline,ul,ol,left,center,right,justify,font,indent,outdent,fontsize,paragraph,brush,image,copyformat,cut,copy,paste,selectall,hr,table,link,symbol,undo,redo,find',
};

export const JoditEditorReadOnlyConfig = {
  readonly: true,
  toolbar: false,
  statusbar: false,
};

export const endpoints = {
  getRoles: `api/role`,
  register: `api/auth/register`,
  confirmEmail: `api/auth/confirmEmail`,
  login: `api/auth/login`,
  forgotPassword: `api/auth/forgotPassword`,
  forgotConfirmPassword: `api/user/forgotConfirmPassword`,
  changePassword: `api/auth/changePassword`,
  courseCategory: `${API}api/category/all`,
  createCourseAsDraft: `api/course/saveAsDraft`,
  createLessonAsDraft: `api/course/createDraftLesson`,
  updateLessonAsDraft: `api/course/updateDraftLesson/`
};

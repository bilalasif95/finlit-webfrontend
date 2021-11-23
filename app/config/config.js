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

export const endpoints = {
  getRoles: `${API}api/role`,
  register: `${API}api/auth/register`,
  confirmEmail: `${API}api/auth/confirmEmail`,
  login: `${API}api/auth/login`,
  forgotPassword: `${API}api/auth/forgotPassword`,
  forgotConfirmPassword: `${API}api/user/forgotConfirmPassword`,
  changePassword: `${API}api/auth/changePassword`,
  courseCategory: `${API}api/category`,
  createCourseAsDraft: `${API}api/course/saveAsDraft`,
};

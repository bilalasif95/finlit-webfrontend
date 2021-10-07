export const API = process.env.REACT_APP_API
  ? process.env.REACT_APP_API
  : 'http://61.85.154.156:3016/';

export const JoditEditorConfig = {
  statusbar: false,
  toolbarSticky: false,
  toolbarAdaptive: false,
  uploader: { insertImageAsBase64URI: true },
  buttons:
    'bold,italic,underline,ul,ol,left,center,right,justify,font,indent,outdent,fontsize,paragraph,brush,image,copyformat,cut,copy,paste,selectall,hr,table,link,symbol,undo,redo,find',
};

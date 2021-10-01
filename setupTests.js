// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import 'jest-enzyme';

// configure({ adapter: new Adapter() });
// import i18n from "./config/i18n";
// import '@testing-library/jest-dom';
window.alert = () => ({});
window.matchMedia = () => ({});
window.scrollTo = () => ({});
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
// i18n.init({
//     react: {
//         useSuspense: false
//     }
// });
global.localStorage = localStorageMock;

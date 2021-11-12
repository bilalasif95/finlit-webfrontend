import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
// import { browserHistory, BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import history from 'utils/history';
import CourseSidebar from '../index';
// import configureStore from '../../../../../configureStore';
import Store2 from '../../../../../containers/reduxSetup/store';
describe('<CourseSidebar />', () => {
  let store;

  beforeAll(() => {
    // store = configureStore({}, browserHistory);
    store = Store2;
  });

  it('should render and match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <Provider store={store}>
          <IntlProvider locale="en">
            {/* <BrowserRouter> */}
            <Router history={history}>
              {/* <CourseSidebar detail={{ data: {} }} /> */}
              <CourseSidebar />
              {/* </BrowserRouter> */}
            </Router>
          </IntlProvider>
        </Provider>,
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});

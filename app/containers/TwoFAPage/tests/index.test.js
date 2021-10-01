import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import history from 'utils/history';
import Store2 from 'containers/reduxSetup/store';
import TwoFAPage from '../index';
describe('TwoFAPage />', () => {
  let store;
  beforeAll(() => {
    // store = configureStore({}, browserHistory);
    store = Store2;
  });
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          {/* <BrowserRouter> */}
          <Router history={history}>
            <TwoFAPage />
          </Router>
          {/* </BrowserRouter> */}
        </IntlProvider>
      </Provider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});

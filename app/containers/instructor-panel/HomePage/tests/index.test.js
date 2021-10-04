import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from 'utils/history';
import Store2 from 'containers/reduxSetup/store';
import Loadable from '../Loadable';
describe('<HomePage />', () => {
  let store;
  beforeAll(() => {
    // store = configureStore({}, browserHistory);
    store = Store2;
  });
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <Router history={history}>
            <Loadable />
          </Router>
        </IntlProvider>
      </Provider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});

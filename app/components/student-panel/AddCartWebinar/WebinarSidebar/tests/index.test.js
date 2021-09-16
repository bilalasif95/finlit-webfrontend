import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter } from 'react-router-dom';

import HackathonSidebar from '../index';
import configureStore from '../../../../../configureStore';

describe('<HackathonSidebar />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <Provider store={store}>
          <IntlProvider locale="en">
            <BrowserRouter>
              <HackathonSidebar />
            </BrowserRouter>
          </IntlProvider>
        </Provider>,
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});

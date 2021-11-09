import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter } from 'react-router-dom';

import Notifications from '../index';
import configureStore from '../../../../configureStore';

describe('<Notifications />', () => {
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
              <Notifications />
            </BrowserRouter>
          </IntlProvider>
        </Provider>,
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});

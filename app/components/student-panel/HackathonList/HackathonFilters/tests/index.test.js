import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory, BrowserRouter } from 'react-router-dom';

import configureStore from '../../../../../configureStore';
import HackathonFilters from '../index';

describe('<HackathonFilters />', () => {
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
              <HackathonFilters />
            </BrowserRouter>
          </IntlProvider>
        </Provider>,
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});

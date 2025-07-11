import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import MainSearch from '../index';
import configureStore from '../../../../../configureStore';

describe('<MainSearch />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <Provider store={store}>
          <IntlProvider locale="en">
            <MainSearch />
          </IntlProvider>
        </Provider>,
      )
      .toJSON();

    expect(renderedComponent).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Notification from '../index';

describe('<Notification />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <Notification />
        </BrowserRouter>
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

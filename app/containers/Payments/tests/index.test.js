import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Payments from '../index';

describe('<Payments />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <Payments />
        </BrowserRouter>
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

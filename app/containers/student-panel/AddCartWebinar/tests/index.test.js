import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import AddCartWebinar from '../index';

describe('<AddCartWebinar />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <AddCartWebinar />
        </BrowserRouter>
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});

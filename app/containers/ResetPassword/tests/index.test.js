import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import ResetPassword from '../index';

describe('ResetPassword />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render( 
      <IntlProvider locale="en">
        <BrowserRouter>
          <ResetPassword />
        </BrowserRouter>
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});

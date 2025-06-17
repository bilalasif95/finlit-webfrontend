import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import ForgotPasswordPage from '../index';

describe('ForgotPasswordPage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <ForgotPasswordPage />
        </BrowserRouter>
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});

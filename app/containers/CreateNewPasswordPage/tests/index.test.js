import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import CreateNewPasswordPage from '../index';

describe('CreateNewPasswordPage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <CreateNewPasswordPage />
        </BrowserRouter>
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});

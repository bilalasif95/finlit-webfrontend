import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import CourseCertificate from '../index';

describe('<CourseCertificate />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <CourseCertificate />
        </BrowserRouter>
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

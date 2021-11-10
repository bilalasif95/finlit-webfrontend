import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import CourseCertificate from '../index';

describe('<CourseCertificate />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <CourseCertificate />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

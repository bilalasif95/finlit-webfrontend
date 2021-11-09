import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import AboutCourse from '../index';

describe('<AboutCourse />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <AboutCourse />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

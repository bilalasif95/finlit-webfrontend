import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import MyCourses from '../index';

describe('<MyCourses />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <MyCourses />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

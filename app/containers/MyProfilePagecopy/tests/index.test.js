import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import CoursesListPage from '../index';

describe('<CoursesListPage />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <CoursesListPage />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

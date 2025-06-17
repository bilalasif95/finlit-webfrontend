import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import CoursesListPage from '../index';

describe('<CoursesListPage />', () => {
  let userInfo;
  beforeAll(() => {
    userInfo = JSON.parse(localStorage.getItem('userInfo'));
  });
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <CoursesListPage userInfo={userInfo} />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

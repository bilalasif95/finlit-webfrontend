import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import Loadable from '../Loadable';

describe('<CoursesListPage />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <Loadable />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

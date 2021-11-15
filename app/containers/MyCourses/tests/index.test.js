import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Loadable from '../Loadable';

describe('<MyCourses />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <Loadable />
        </BrowserRouter>
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

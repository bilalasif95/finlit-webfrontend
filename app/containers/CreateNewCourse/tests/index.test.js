import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import CreateNewCourse from '../index';

describe('<CreateNewCourse />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <CreateNewCourse />
        </BrowserRouter>
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Loadable from '../Loadable';

describe('<BootcampListPage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <Loadable />
        </BrowserRouter>
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});

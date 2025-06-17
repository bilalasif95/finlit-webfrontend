import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Loadable from '../Loadable';

describe('<AddBootCampPage />', () => {
  it('should render its snapshot', () => {
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

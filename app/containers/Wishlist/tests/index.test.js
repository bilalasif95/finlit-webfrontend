import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import Wishlist from '../index';

describe('<Wishlist />', () => {
  it('should render its heading', () => {
    const { container } = render(
      <IntlProvider locale="en">
        <Wishlist />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

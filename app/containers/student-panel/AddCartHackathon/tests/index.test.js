import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import AddCartBootcamp from '../index';

describe('<AddCartBootcamp />', () => {
  // beforeAll(() => {
  //   window.getSelection = () => {
  //     const removeAllRanges = () => {};
  //     return removeAllRanges;
  //   };
  // });
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <AddCartBootcamp />
        </BrowserRouter>
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});

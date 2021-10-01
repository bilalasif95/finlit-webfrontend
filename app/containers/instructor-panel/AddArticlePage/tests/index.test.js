import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import AddArticlePage from '../index';

describe('<AddArticlePage />', () => {
  // before(() => {
  // });
  beforeAll(() => {
    window.getSelection = () => {
      const removeAllRanges = () => {};
      return removeAllRanges;
    };
  });

  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <BrowserRouter>
          <AddArticlePage />
        </BrowserRouter>
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});

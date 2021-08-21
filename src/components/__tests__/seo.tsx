import React from 'react';
import {render} from '../../utils/test-utils';
import Seo from '../seo';

import Helmet from 'react-helmet';

describe('SEO component', () => {
  it('renders correctly', () => {
    const mockTitle = 'All Posts | Gatsby Starter Blog';
    const mockDescription = 'A starter blog demonstrating what Gatsby can do.';
    const mockTwitterHandler = 'kylemathews';

    const SEORender = render(<Seo title="All Posts" />);

    const {title, metaTags} = Helmet.peek();

    expect(title).toBe(mockTitle);
    expect(metaTags[0].content).toBe(mockDescription);
    expect(metaTags[5].content).toBe(mockTwitterHandler);
    expect(metaTags.length).toBe(8);

    expect(SEORender).toMatchSnapshot();
  });
});

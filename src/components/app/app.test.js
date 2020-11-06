import React from 'react';
import {shallow} from 'enzyme';

import App from './app';

describe(`App renders correctly`, () => {
  it(`App renders correctly`, () => {
    const tree = shallow(
        <App />
    );

    expect(tree).toMatchSnapshot();
  });
});

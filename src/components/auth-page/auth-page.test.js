import React from 'react';
import renderer from 'react-test-renderer';

import {noop} from '../../mocks/tests-data';

import {AuthPage} from './auth-page';

const history = {
  push: noop,
};

describe(`AuthPage rendered correctly`, () => {
  it(`Render auth-page component`, () => {
    const tree = renderer
      .create(
          <AuthPage
            history={history}
            email={``}
            password={``}
            onChange={noop}
            onSubmit={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

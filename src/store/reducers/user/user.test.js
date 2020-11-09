import MockAdapter from 'axios-mock-adapter';

import {APIRoutes, AuthorizationStatus, Routes} from '../../../const';

import {user} from './user';
import {createAPI} from '../../../services/api';
import {ActionType} from '../../action';
import {checkAuth, login} from '../../api-actions';

const api = createAPI(() => {});

describe(`Test reducer for user`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData: null,
    });
  });

  it(`Reducer should set auth by payload value`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it(`Reducer should set userData by payload value`, () => {
    expect(user({
      userData: null,
    }, {
      type: ActionType.SET_LOGGED_USER,
      payload: {},
    })).toEqual({
      userData: {},
    });
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct checkAuth API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecker = checkAuth();

    apiMock
      .onGet(APIRoutes.LOGIN)
      .reply(200, {fake: true});

    return authChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_LOGGED_USER,
          payload: {fake: true},
        });
      });
  });

  it(`Should make a correct login API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `test`};
    const loginSetter = login(fakeUser);

    apiMock
      .onPost(APIRoutes.LOGIN)
      .reply(200, {fake: true});

    return loginSetter(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_LOGGED_USER,
          payload: {fake: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: Routes.MAIN,
        });
      });
  });
});

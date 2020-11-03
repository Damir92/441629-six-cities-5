import {ActionType} from '../../action';
import {AuthorizationStatus} from '../../../const';
import {updateObject} from '../../../utils';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return updateObject(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_LOGGED_USER:
      return updateObject(state, {
        userData: action.payload,
      });
  }

  return state;
};

export {user};

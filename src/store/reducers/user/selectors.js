import {ReducerType} from '../../reducer';

const REDUCER_USER = ReducerType.STORE_USER;

export const getAuthorizationStatus = (state) => state[REDUCER_USER].authorizationStatus;

export const getUserData = (state) => state[REDUCER_USER].userData;

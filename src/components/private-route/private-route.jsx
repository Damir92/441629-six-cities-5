import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {getAuthorizationStatus} from '../../store/reducers/user/selectors';

const PrivateRoute = ({conditionValue, path, render, redirectTo, authorizationStatus}) =>
  <Route
    path={path}
    render={(routeProps) => {
      return (
        authorizationStatus === conditionValue
          ? render(routeProps)
          : <Redirect to={redirectTo} />
      );
    }}
  />;

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  conditionValue: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);

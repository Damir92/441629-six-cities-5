import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {getAuthorizationStatus, getUserData} from '../../store/reducers/user/selectors';

import {Routes, AuthorizationStatus} from '../../const';

const Header = ({logged, isMainPage, userData}) =>
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">

          {isMainPage
            ?
            <a
              className="header__logo-link header__logo-link--active"
            >
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
            :
            <Link
              className="header__logo-link"
              to={Routes.MAIN}
            >
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          }

        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">

              <Link
                className="header__nav-link header__nav-link--profile"
                to={
                  logged === AuthorizationStatus.AUTH
                    ?
                    Routes.FAVORITES
                    :
                    Routes.LOGIN
                }
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                {logged === AuthorizationStatus.AUTH
                  ?
                  <span className="header__user-name user__name">
                    {userData && userData.email}
                  </span>
                  :
                  <span className="header__login">Sign in</span>
                }
              </Link>

            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;

Header.propTypes = {
  isMainPage: PropTypes.bool,
  logged: PropTypes.oneOf(
      [AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]
  ).isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  logged: getAuthorizationStatus(state),
  userData: getUserData(state),
});

export {Header};
export default connect(mapStateToProps)(Header);

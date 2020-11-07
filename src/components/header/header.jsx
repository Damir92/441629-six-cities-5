import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getAuthorizationStatus, getUserData} from '../../store/reducers/user/selectors';

import {Routes, AuthorizationStatus} from '../../const';

const Header = ({history, logged, isMainPage, userData}) => {
  const handleToMainClick = (evt) => {
    evt.preventDefault();

    if (!isMainPage) {
      history.push(Routes.MAIN);
    }
  };

  const handleLinkClick = (evt) => {
    evt.preventDefault();

    if (logged === AuthorizationStatus.AUTH) {
      history.push(Routes.FAVORITES);
    } else {
      history.push(Routes.LOGIN);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            <a
              className={
                `header__logo-link
                ${isMainPage ? `header__logo-link--active` : ``}`
              }
              href={Routes.MAIN}
              onClick={handleToMainClick}
            >
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>

          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a
                  className="header__nav-link header__nav-link--profile"
                  href={Routes.MAIN}
                  onClick={handleLinkClick}
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
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
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

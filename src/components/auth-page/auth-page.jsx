import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Routes} from '../../const';
import {login} from '../../store/api-actions';

import withAuthForm from '../../hocs/with-auth-form/with-auth-form';

const AuthPage = ({history, email, password, onChange, onSubmit}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  const handleToMainClick = (evt) => {
    evt.preventDefault();

    history.push(Routes.MAIN);
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a
                className="header__logo-link"
                href={Routes.MAIN}
                onClick={handleToMainClick}
              >
                <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input
                  className="login__input form__input"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  type="email"
                  onChange={onChange}
                  value={email}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input
                  className="login__input form__input"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  type="password"
                  onChange={onChange}
                  value={password}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

AuthPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (authData) => dispatch(login(authData)),
});

export {AuthPage};
export default connect(null, mapDispatchToProps)(withAuthForm(AuthPage));

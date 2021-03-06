import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Cities, Routes} from '../../const';

import {login} from '../../store/api-actions';
import {getCity} from '../../store/reducers/site-data/selectors';

import Header from '../header/header';

import withAuthForm from '../../hocs/with-auth-form/with-auth-form';

const AuthPage = (props) => {
  const {
    city,
    email,
    password,
    onChange,
    onSubmit,
  } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  return (
    <div className="page page--gray page--login">

      <Header />

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
              <Link
                className="locations__item-link"
                to={Routes.MAIN}
              >
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

AuthPage.propTypes = {
  city: PropTypes.oneOf(Cities).isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (authData) => dispatch(login(authData)),
});

export {AuthPage};
export default connect(mapStateToProps, mapDispatchToProps)(withAuthForm(AuthPage));

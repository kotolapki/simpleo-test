import React, {useState} from 'react';
import {connect} from 'react-redux';
import {changeLoginStatus, addNewUser, changeErrorLoginStatus} from '../../redux/actions';
import getRandomId from '../../utils/getRandomId';
import checkLocalUsers from '../../utils/checkLocalUsers';
import addNewUserToLocalStorage from '../../utils/addNewUserToLocalStorage';
import './styles.css';
import AutorizationErrorPopup from '../AutorizationErrorPopup';

function Autorization({changeLoginStatus, addNewUser, changeErrorLoginStatus, loginErrorStatus}) {
  const [isRegistation, setIsRegistation] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  let type;

  function clickHandler(e) {
    type = e.target.id;

    if (type === 'registration') {
      setIsRegistation(true);
    }

    if (type === 'backToLogin') {
      setIsRegistation(false);
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    if (type === 'login') {
      if (checkLocalUsers(e.target[0].value, e.target[1].value, 'login')) {
        changeLoginStatus();
      } else {
        setErrorMessage('This user is not registered, try again or register new user');
        changeErrorLoginStatus();
      }
    }

    if (type === 'registerUser') {
      switch (checkLocalUsers(e.target[2].value, e.target[3].value, 'registration', e.target[0].value, e.target[1].value)) {
        case 'nickname':
          setErrorMessage('This nickname is already used, try another one');
          changeErrorLoginStatus();
          break;
        case 'email':
          setErrorMessage('This email is already used, try another one');
          changeErrorLoginStatus();
          break;
        case 'login':
          setErrorMessage('This login is already used, try another one');
          changeErrorLoginStatus();
          break;
        default: 
          addNewUserToLocalStorage(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, getRandomId());
          addNewUser(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, getRandomId());
    }

    e.target.reset();
  }

  return (
    <>
      {loginErrorStatus && <AutorizationErrorPopup errorMessage={errorMessage}/>}
      <form className='autorization-form' action='#' method="post" onSubmit={submitHandler}>
        {isRegistation && 
          <>
            <label className='autorization-form__label' htmlFor='nicknameField'>
              Nickname
            </label>
            <input className='autorization-form__input' type='text' name='nicknameField' id='nicknameField' autoComplete='off' required />
            <label className='autorization-form__label' htmlFor='emailField'>
              Email
            </label>
            <input className='autorization-form__input' type='email' name='emailField' id='emailField' autoComplete='off' required />
          </>
        }
        <label className='autorization-form__label' htmlFor='loginField'>
          Login
        </label>
        <input className='autorization-form__input' type='text' name='loginField' id='loginField' autoComplete='off' required />
        <label className='autorization-form__label' htmlFor='passwordField'>Password</label>
        <input className='autorization-form__input' type='password' name='passwordField' id='passwordField' required />
        {isRegistation? 
          <div className='autorization-form__btns-wrapper'>
            <button 
              className='autorization-form__submit-btn autorization-form__submit-btn--first' 
              type='button' 
              id='backToLogin' 
              onClick={clickHandler}
            >
              Back
            </button>
            <button 
              className='autorization-form__submit-btn autorization-form__submit-btn--second' 
              type='submit' 
              id='registerUser' 
              onClick={clickHandler}
            >
              Register User
            </button>
          </div>
          :
          <div className='autorization-form__btns-wrapper'>
            <button 
              className='autorization-form__submit-btn autorization-form__submit-btn--first' 
              type='submit' 
              id='login' 
              onClick={clickHandler}
            >
              Login
            </button>
            <button 
              className='autorization-form__submit-btn autorization-form__submit-btn--second' 
              type='button' 
              id='registration' 
              onClick={clickHandler}
            >
              Registration
            </button>
          </div>
        }
      </form>
    </>
  )
}

const mapStateToProps = state => {
  return {
    loginErrorStatus: state.loginErrorStatus.loginErrorStatus
  }
}

const mapDispatchToProps = {
  changeLoginStatus: changeLoginStatus,
  addNewUser: addNewUser,
  changeErrorLoginStatus: changeErrorLoginStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(Autorization);
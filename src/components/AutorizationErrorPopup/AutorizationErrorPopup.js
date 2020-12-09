import React from 'react';
import {connect} from 'react-redux';
import {changeErrorLoginStatus} from '../../redux/actions';
import './styles.css';

function AutorizationErrorPopup({changeErrorLoginStatus, errorMessage}) {
  return (
    <div className='error-popup'>
      <div className='error-popup__layout'></div>
      <div className='error-popup__container'>
        <p className='error-popup__text'>
          {errorMessage}
        </p>
        <button className='error-popup__button' type='button' onClick={changeErrorLoginStatus}>Click here to try again</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  changeErrorLoginStatus: changeErrorLoginStatus
}

export default connect(null, mapDispatchToProps)(AutorizationErrorPopup);
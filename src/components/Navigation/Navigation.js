import React, {useState} from 'react';
import {connect} from 'react-redux';
import {changeNavigationCategory} from '../../redux/actions';
import './styles.css';

function Navigation({changeNavigationCategory}) {
  const [buttonFontSize, setButtonFontSize] = useState({width: 'auto'});
  const [transformArrow, setTransformArrow] = useState({transform: 'rotate(180deg)'});

  function changeButtonStyleHandler() {
    if (buttonFontSize.width === 'auto' && transformArrow.transform === 'rotate(180deg)') {
      setButtonFontSize({width: '50px'});
      setTransformArrow({transform: 'rotate(0deg)'});
    } else {
      setButtonFontSize({width: 'auto'});
      setTransformArrow({transform: 'rotate(180deg)'});
    }
  }

  function changeCategoryHandler(e) {
    let headers;

    if (e.target.id === 'users') {
      headers = ['id', 'login'];
    } else {
      headers = ['id', 'degree'];
    }

    changeNavigationCategory(e.target.id, headers);
  }

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <button 
            className='navigation__button navigation__button--users' 
            type='button' 
            aria-label='Users' 
            id='users' 
            style={buttonFontSize} 
            onClick={changeCategoryHandler}
          >
            Users
          </button>
        </li>
        <li className='navigation__item'>
          <button className='navigation__button navigation__button--temperature' 
          type='button' 
          aria-label='Temperature' 
          id='temperature' 
          style={buttonFontSize} 
          onClick={changeCategoryHandler}
          >
            Temperature
          </button>
        </li>
      </ul>
      <button 
        className='navigation__arrow-btn' 
        type='button' 
        aria-label='show/hide button`s text' 
        style={transformArrow} 
        onClick={changeButtonStyleHandler}
      >
      </button>
    </nav>
  )
}

const mapDispatchToProps = {
  changeNavigationCategory: changeNavigationCategory
}

export default connect(null, mapDispatchToProps)(Navigation);
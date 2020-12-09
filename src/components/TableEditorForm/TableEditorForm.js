import React, {useState} from 'react';
import './styles.css';
import {connect} from 'react-redux';
import {changeUserInformation, changeTemperature} from '../../redux/actions';
import changeLocalUserInformation from '../../utils/changeLocalUserInformation';

function TableEditorForm({value, changeEditorVisibility, index, changeUserInformation, tableCategoryData, changeTemperature}) {
  const [inputValue, setInputValue] = useState(value);
  
  function changeHandler(e) {
    setInputValue(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    if (tableCategoryData.currentCategory === 'users') {
      changeLocalUserInformation(index, e.target[0].value);
      changeUserInformation(index, e.target[0].value);
    }

    if (tableCategoryData.currentCategory === 'temperature') {
      changeTemperature(index, e.target[0].value);
    }
    
    changeEditorVisibility();
  }

  return (
    <form className='table__cell-form' action='#' method='POST' onSubmit={submitHandler}>
      <label className='table__cell-label visually-hidden' htmlFor='editValue'>
        New value
      </label>
      <input 
        className='table__cell-input' 
        type='text' 
        name='editValue' 
        id='editValue' 
        placeholder={value} 
        value={inputValue} 
        onChange={changeHandler} 
        autoComplete='off' 
        required
      />
      <div className='table__cell-btns-wrapper'>
        <button 
          className='table__cell-btn table__cell-btn--submit' 
          type='submit' 
          aria-label='submit new value'
        />
        <button 
          className='table__cell-btn table__cell-btn--cancel' 
          type='button' 
          aria-label='cancel editing' 
          onClick={changeEditorVisibility}
        />
      </div>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    tableCategoryData: state.tableCategoryData
  }
}

const mapDispatchToProps = {
  changeUserInformation: changeUserInformation,
  changeTemperature: changeTemperature
}

export default connect(mapStateToProps, mapDispatchToProps)(TableEditorForm);
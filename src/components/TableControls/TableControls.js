import React from 'react';
import './styles.css';
import {connect} from 'react-redux';
import {deleteUser, deleteTemperature} from '../../redux/actions';
import deleteLocalUser from '../../utils/deleteLocalUser';

function TableControls({changeEditorVisibility, tableCategoryData, index, deleteUser, deleteTemperature}) {
  function clickHandler() {
    if (tableCategoryData.currentCategory === 'users') {
      deleteLocalUser(index);
      deleteUser(index);
    }

    if (tableCategoryData.currentCategory === 'temperature') {
      deleteTemperature(index);
    }
  }

  return (
    <div className='table__cell-controls-wrapper'>
      <button className='table__cell-control-btn table__cell-control-btn--edit' type='button' aria-label='edit value' onClick={changeEditorVisibility}></button>
      <button className='table__cell-control-btn table__cell-control-btn--delete' type='button' aria-label='delete value' onClick={clickHandler}></button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tableCategoryData: state.tableCategoryData,
    usersInformation: state.usersInformation
  }
}

const mapDispatchToProps = {
  deleteUser: deleteUser,
  deleteTemperature: deleteTemperature
}

export default connect(mapStateToProps, mapDispatchToProps)(TableControls);
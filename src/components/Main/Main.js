import React from 'react';
import './styles.css';
import Navigation from '../Navigation';
import Table from '../Table/Table';

function Main() {
  return (
    <div className='main-container'>
      <Navigation />
      <Table />
    </div>
  )
}

export default Main;
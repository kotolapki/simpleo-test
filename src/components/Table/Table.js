import React from 'react';
import {connect} from 'react-redux';
import './styles.css';
import TableCell from '../TableCell';

function Table({tableCategoryData, usersInformation, temperatureInformation}) {
  let tableData;

  if (tableCategoryData.currentCategory === 'users') {
    tableData = usersInformation.users;
  }

  if (tableCategoryData.currentCategory === 'temperature') {
    tableData = temperatureInformation.temperature;
  }
  
  return (
    <div className='table'>
      <div className='table__wrapper'>
        <table className='table__body'>
          <thead>
          <tr className='table__row'>
            {tableCategoryData.tableColumnHeaders.map((item, index) => {
              return <th className='table__head-cell' key={index}>{item}</th>
            })}
          </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              return (
                <tr className='table__row' key={index}>
                  <td className='table__cell'>{item[tableCategoryData.tableColumnHeaders[0]]}</td>
                  <TableCell value={item[tableCategoryData.tableColumnHeaders[1]]} index={index}/>
                </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tableCategoryData: state.tableCategoryData,
    usersInformation: state.usersInformation,
    temperatureInformation: state.temperatureInformation
  }
}

// const mapDispatchToProps = {
//   changeTableEditorVisibility: changeTableEditorVisibility
// }

export default connect(mapStateToProps, null)(Table);
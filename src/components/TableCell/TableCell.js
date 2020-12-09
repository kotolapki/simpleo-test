import React, {useState} from 'react';
import './styles.css';
import TableControls from '../TableControls';
import TableEditorForm from '../TableEditorForm';

function TableCell({value, index}) {
  const [editorVisibility, setEditorVisibility] = useState(false);

  function changeEditorVisibility() {
    setEditorVisibility(!editorVisibility);
  }

  return (
    <td className='table__cell table__cell--second'>
      {editorVisibility? 
        <TableEditorForm value={value} index={index} changeEditorVisibility={changeEditorVisibility}/>
        :
        <>
          {value}
          <TableControls index={index} changeEditorVisibility={changeEditorVisibility}/>
        </>
      }
    </td>
  )
}

export default TableCell;
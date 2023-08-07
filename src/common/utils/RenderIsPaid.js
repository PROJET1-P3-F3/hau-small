import React from 'react';
import { mainTheme } from '../../haTheme';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function getIconAndColor(record) {

  if (record.status === 'LATE') {
    return <ErrorIcon style={{ color: mainTheme.palette.error.light }} />;
  } 
}


export const RenderIsPaid = (record) => {
    const icon= getIconAndColor(record);
  
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
    );
};
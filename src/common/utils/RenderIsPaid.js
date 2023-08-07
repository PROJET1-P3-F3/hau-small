import React from 'react';
import { mainTheme } from '../../haTheme';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function getIconAndColor(record) {
  let icon;
  let color;

  if (record.status === 'LATE') {
    icon = <ErrorIcon style={{ color: mainTheme.palette.error.light }} />;
    color = 'red';
  } else if (record.status === 'PAID') {
    icon = <CheckCircleIcon style={{ color: 'green' }} />;
    color = 'yellow';
  } else {
    icon = null;
    color = 'inherit';
  }

  return { icon, color };
}


export const RenderIsPaid = ({ record }) => {
    const { icon, color } = getIconAndColor(record);
  
    return (
      <div style={{ color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
    );
};
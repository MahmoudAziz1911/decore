import React from 'react'
import Alert from '@mui/material/Alert';

const Toast = ({ msg, title, handleShow}) => {
  return (
        <Alert severity={title} sx={{ width: '100%' }}>
          {msg}
        </Alert>
  )
}

export default Toast;
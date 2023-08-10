import { Box, Dialog, DialogContent, DialogTitle, Slide, DialogActions } from '@mui/material'
import { cloneElement, forwardRef, useState } from 'react'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

export const ClaimDialog = ({ openButton, content, title, actions }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      {cloneElement(openButton, { onClick: handleClickOpen })}
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent sx={{ minWidth: '400px' }}>{content && content(handleClose)}</DialogContent>
        <DialogActions>{actions && actions(handleClose)}</DialogActions>
      </Dialog>
    </Box>
  )
}

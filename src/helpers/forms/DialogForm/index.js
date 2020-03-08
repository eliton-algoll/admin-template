import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  subtitle: {
    fontSize: '10px',
    color: 'red',
  },
  button: {
    background: '#3b9eff',
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      <small />
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});
const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function DialogForm({ children, handleOpen, handleClose, title, subtitle }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(handleOpen);
  }, [handleOpen]);

  return (
    <Dialog
      open={open}
      aria-labelledby="form-dialog-title"
      maxWidth="md"
      disableBackdropClick
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}{' '}
        <small style={{ fontSize: '10px', color: 'red' }}>{subtitle}</small>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
DialogForm.defaultProps = {
  subtitle: '',
};

DialogForm.propTypes = {
  children: PropTypes.element.isRequired,
  handleOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default DialogForm;

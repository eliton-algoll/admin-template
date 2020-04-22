import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '500px',
    position: 'absolute',
    zIndex: '1',
    width: '90%',
    height: '60%',
    background: 'rgba(255, 255, 255, 0.8)',
  },
}));

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={90} />
    </div>
  );
}

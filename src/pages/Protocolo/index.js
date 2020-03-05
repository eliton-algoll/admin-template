import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import TableStyled from '../../utils/Table';
import api from '../../services/api';

// formulários
import ProtocoloForm from './components/forms/ProtocoloForm';

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

const ButtonSubmit = withStyles(styles)(props => {
  const { children, classes } = props;
  return (
    <Button variant="contained" className={classes.button} color="primary">
      {children}
    </Button>
  );
});

export default function Protocolo() {
  const [protocolos, setProtocolos] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function loadProtocolos() {
      const response = await api.get('/identificacao/protocolo');

      setProtocolos(response.data);
    }

    loadProtocolos();
  }, []);

  const columns = [
    {
      title: 'PROTOCOLO',
      field: 'codProtocolo',
      cellStyle: {
        minWidth: '500px',
      },
    },
    {
      title: 'DATA',
      field: 'dtExpedicao.date',
      render: rowData => {
        const date = parseISO(rowData.dtExpedicao.date);
        const dataFormatada = format(date, "d'/'MM'/'yyyy", {
          locale: pt,
        });
        return dataFormatada;
      },
    },
    { title: 'IDENTIDADE', field: 'idt' },

    {
      title: 'NOME',
      field: `nome`,
    },
    { title: 'TIPO PESSOA', field: 'descricao' },
    {
      title: 'MOTIVO',
      field: 'motivoIdt',
      render: rowData => `${rowData.kitBio === '1' ? 'Sim' : 'Não'}`,
    },
    {
      title: 'STATUS',
      field: 'statusString',
    },
  ];

  const actions = [
    {
      icon: 'perm_identity',
      tooltip: 'Iniciar Identificação',
    },
    {
      icon: 'add_box',
      tooltip: 'Gerar protocolo',
      isFreeAction: true,
      iconProps: { color: 'primary', fontSize: 'large' },
      onClick: () => handleOpen(),
    },
  ];

  return (
    <>
      <TableStyled
        data={protocolos}
        columns={columns}
        actions={actions}
        title="Protocolos cadastrados"
      />

      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        maxWidth="lg"
        disableBackdropClick
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Gerar Protocolo
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Todos os campos com (*) são obrigatórios.
          </DialogContentText>
          <ProtocoloForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancelar
          </Button>
          <ButtonSubmit onClick={handleClose}>Gerar Protocolo</ButtonSubmit>
        </DialogActions>
      </Dialog>
    </>
  );
}

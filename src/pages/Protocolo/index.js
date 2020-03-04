import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Fade, Backdrop } from '@material-ui/core';

import TableStyled from '../../utils/Table';
import api from '../../services/api';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  titleModal: {
    borderBottom: '1px solid #e5e5e5',
    fontSize: '18px',
    fontWeight: '400',
  },
}));

export default function Protocolo() {
  const [protocolos, setProtocolos] = useState([]);
  const classes = useStyles();
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
      onClick: event => setOpen(true),
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

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className={classes.titleModal}>
              Transition modal
            </h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { connect } from 'react-redux';
import pt from 'date-fns/locale/pt';
import Layout from '~/template/Layout';

import TableStyled from '~/utils/Table';
import api from '~/services/api';

import DialogForm from '~/helpers/forms/DialogForm';

// formulários
import ProtocoloForm from './components/forms/ProtocoloForm';
import BuscaForm from './components/forms/BuscaForm';

function Protocolo(props) {
  const [protocolos, setProtocolos] = useState([]);
  const [open, setOpen] = useState(false);
  const [openIdt, setOpenIdt] = useState(false);
  const [basePessoa, setBasePessoa] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenIdt = () => {
    setOpenIdt(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseIdt = () => {
    setOpenIdt(false);
  };

  async function handleSubmit(data) {
    const { dispatch } = props;

    const protocoloExist = await api.get(
      `/identificacao/protocolo/verificaidtprotocolo/${data.idt}`
    );

    if (protocoloExist.data.length !== 0) {
      alert(protocoloExist.data.msgm);

      return;
    }

    const response = await api.get(
      `/identificacao/protocolo/findDadosmilitar/${data.idt}`
    );

    setBasePessoa(response.data.dados);

    dispatch({
      type: 'ADD_DADOS_PESSOA',
      basePessoa: response.data.dados,
    });

    handleCloseIdt();
    handleOpen();
  }

  async function handleSubmitGeraProtocolo(data) {
    const { dispatch } = props;

    const user = {
      usuario: '1107205278',
      omNumero: '01',
      om: 2,
      rm: '11',
    };

    const dataEnvia = { ...data, ...user };

    const response = await api.post(
      `/identificacao/protocolo/gerarapi`,
      dataEnvia
    );

    if (response.data.status === 200) {
      dispatch({
        type: 'ADD_PROTOCOLO',
        protocolo: response.data.protocolo,
      });

      setProtocolos([...protocolos, response.data.protocolo]);

      handleClose();
    }
  }

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
      onClick: () => handleOpenIdt(),
    },
  ];

  return (
    <Layout>
      <TableStyled
        data={protocolos}
        columns={columns}
        actions={actions}
        title="Protocolos cadastrados"
      />

      <DialogForm
        handleClose={handleClose}
        handleOpen={open}
        title="Gerar Protocolo"
        submitButton="Gerar Protocolo"
      >
        <ProtocoloForm handleSubmit={handleSubmitGeraProtocolo} />
      </DialogForm>

      <DialogForm
        handleClose={handleCloseIdt}
        handleOpen={openIdt}
        title="Gerar Protocolo"
        submitButton="Pesquisar"
        form="buscaForm"
      >
        <BuscaForm handleSubmit={handleSubmit} />
      </DialogForm>
    </Layout>
  );
}

export default connect()(Protocolo);

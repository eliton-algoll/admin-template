import React, { useState, useEffect, useRef } from 'react';
import { parseISO, format } from 'date-fns';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import history from '~/services/history';
import Layout from '~/template/Layout';

import TableStyled from '~/utils/Table';
import api from '~/services/api';

import DialogForm from '~/helpers/forms/DialogForm';
import DialogTable from '~/helpers/tables/DialogTable';

// formulários
import ProtocoloForm from './components/forms/ProtocoloForm';
import BuscaForm from './components/forms/BuscaForm';

import imageDefault from '~/assets/images/user.png';

// validações
const schema = Yup.object().shape({
  idt: Yup.string().required('A identidade é obrigatória'),
  cpf: Yup.string().required('O CPF é obrigatório'),
  telefone: Yup.string().required('O telefone é obrigatório'),
  motivoIdt: Yup.number()
    .transform(value => (isNaN(value) ? undefined : value))
    .required('O motivo da identificação é obrigatório'),
  tipoDoc: Yup.number()
    .transform(value => (isNaN(value) ? undefined : value))
    .required('O tipo de documento é obrigatório'),
  codTipoPes: Yup.number()
    .transform(value => (isNaN(value) ? undefined : value))
    .required('O tipo de pessoa é obrigatório'),
});

// validando formulário de busca
const buscaSchema = Yup.object().shape(
  {
    idt: Yup.string().when('nome', {
      is: '',
      then: Yup.string().required('Digite a Identidade ou o nome'),
      otherwise: Yup.string(),
    }),
    nome: Yup.string().when('idt', {
      is: '',
      then: Yup.string().required(),
      otherwise: Yup.string(),
    }),
  },
  ['idt', 'nome']
);

function Protocolo({ user }) {
  const dispatch = useDispatch();
  const [recarregaProtocolos, setRecarregaProtocolos] = useState(false);
  const [protocolos, setProtocolos] = useState([]);
  const [open, setOpen] = useState(false);
  const [openIdt, setOpenIdt] = useState(false);
  const [openVinculados, setOpenVinculados] = useState(false);
  const [basePessoa, setBasePessoa] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadingProtocolos, setLoadingProtocolos] = useState(true);
  const [listaVinculados, setListaVinculados] = useState([]);
  const formRef = useRef(null);
  const formBuscaRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenIdt = () => {
    setOpenIdt(true);
  };

  const handleOpenVinculados = () => {
    setOpenVinculados(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseVinculados = () => {
    setOpenVinculados(false);
  };

  const handleCloseIdt = () => {
    setOpenIdt(false);
  };

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formBuscaRef.current.setErrors({});

      await buscaSchema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formBuscaRef.current.setErrors(validationErrors);
      }
      return;
    }

    setLoading(true);

    if (data.nome && !data.idt) {
      const vinculadosByNome = await api.get(
        `/identificacao/protocolo/findMilitarNome/0/0/${data.nome}`
      );

      setLoading(false);
      setListaVinculados(vinculadosByNome.data);
      handleOpenVinculados();
      handleCloseIdt();
    }

    const protocoloExist = await api.get(
      `/identificacao/protocolo/verificaidtprotocolo/${data.idt}`
    );

    if (protocoloExist.data.length !== 0) {
      toast.error(protocoloExist.data.msgm, { autoClose: false });
      setLoading(false);
      return;
    }

    const response = await api.get(
      `/identificacao/protocolo/findDadosmilitar/${data.idt}`
    );

    if (!response.data.dados) {
      toast.error('Identidade inválida');
      setLoading(false);
      return;
    }

    setBasePessoa(response.data.dados);
    setLoading(false);

    dispatch({
      type: 'ADD_DADOS_PESSOA',
      basePessoa: response.data.dados,
    });

    handleCloseIdt();
    handleOpen();
  }

  function handleChangeBusca() {
    formBuscaRef.current.setErrors({});
  }

  function handleChangeProtocolo(event) {
    formRef.current.setFieldError(event.currentTarget.name);
  }

  async function handleSubmitGeraProtocolo(data) {
    setLoading(true);
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      setLoading(false);
      return;
    }

    const userLogado = {
      usuario: user.identidade,
      omNumero: user.omNumero,
      om: user.om,
      rm: user.rm,
    };

    const dataEnvia = { ...data, ...userLogado };

    dispatch({
      type: '@protocolo/CREATE_PROTOCOLO_REQUEST',
      payload: { data: dataEnvia },
    });

    setLoading(false);
    setRecarregaProtocolos(true);

    handleClose();
  }

  function handleClick(codProtocolo) {
    history.push(`identificacao/${codProtocolo}`);
  }

  useEffect(() => {
    async function loadProtocolos() {
      const response = await api.get('/identificacao/protocolo');

      setProtocolos(response.data);
      setLoadingProtocolos(false);
    }

    loadProtocolos();
  }, [recarregaProtocolos]);

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
      render: rowData => {
        switch (rowData.motivoIdt) {
          case 1:
            return 'Cadastramento Básico';
          case 2:
            return 'Manutenção de Cadastro';
          case 3:
            return 'REID - Extravio';
          case 4:
            return 'REID - Mudança de Situação';
          case 5:
            return 'REID - Promoção';
          case 6:
            return 'REID - Sinistro';

          case 7:
            return 'REID - Término de Validade';
          case 8:
            return '2º Via';
          default:
            return '';
        }
      },
    },
    {
      title: 'STATUS',
      field: 'statusString',
    },
  ];

  const columnsVinculados = [
    {
      title: '',
      field: 'foto',
      render: rowData => {
        return rowData.foto ? (
          <img
            src={`data:image/png;base64,${rowData.foto}`}
            alt="foto"
            style={{ width: '60px', height: '80px;', borderRadius: '50%' }}
          />
        ) : (
          <img
            src={imageDefault}
            alt="foto"
            style={{ width: '60px', height: '80px;', borderRadius: '50%' }}
          />
        );
      },
    },
    {
      title: 'NOME',
      field: 'nome',
    },
    { title: 'IDENTIDADE', field: 'idt' },
    { title: 'NOME DA MÃE', field: 'nomeMae' },
    { title: 'CPF', field: 'cpf' },
    { title: 'NASCIMENTO', field: 'dtNascimento' },
  ];

  const actionsVinculados = [
    {
      icon: 'chevron_right',
      tooltip: 'Gerar Protocolo',
      onClick: (event, rowData) => {
        setBasePessoa(rowData);
        setLoading(false);

        dispatch({
          type: 'ADD_DADOS_PESSOA',
          basePessoa: rowData,
        });

        handleCloseVinculados();
        handleOpen();
      },
    },
  ];

  const actions = [
    {
      icon: 'perm_identity',
      tooltip: 'Iniciar Identificação',
      onClick: (event, rowData) => handleClick(rowData.codProtocolo),
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
        loading={loadingProtocolos}
        title="Protocolos abertos"
      />

      <DialogForm
        handleClose={handleClose}
        handleOpen={open}
        title="Gerar Protocolo"
        submitButton="Gerar Protocolo"
      >
        <ProtocoloForm
          referencia={formRef}
          handleSubmit={handleSubmitGeraProtocolo}
          handleChange={handleChangeProtocolo}
          loading={loading}
        />
      </DialogForm>

      <DialogForm
        handleClose={handleCloseIdt}
        handleOpen={openIdt}
        title="Pesquisar"
        submitButton="Pesquisar"
        form="buscaForm"
      >
        <BuscaForm
          handleSubmit={handleSubmit}
          loading={loading}
          referencia={formBuscaRef}
          handleChange={handleChangeBusca}
        />
      </DialogForm>

      <DialogTable
        handleClose={handleCloseVinculados}
        handleOpen={openVinculados}
        title="Lista de vinculados encontrados"
      >
        <TableStyled
          data={listaVinculados}
          columns={columnsVinculados}
          actions={actionsVinculados}
          title={false}
        />
      </DialogTable>
    </Layout>
  );
}

Protocolo.propTypes = {
  user: PropTypes.objectOf.isRequired,
};

export default connect(state => ({ user: state.auth.user }))(Protocolo);

import React, { useState, useEffect } from 'react';

import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOffOutlined';
import { green } from '@material-ui/core/colors';
import Layout from '~/template/Layout';
import { Container } from './styles';
import TableStyled from '~/utils/Table';

import api from '~/services/api';

export default function Perfil() {
  const [perfis, setPerfis] = useState([]);

  useEffect(() => {
    async function loadPerfis() {
      const response = await api.get('/usuario/perfilapi');

      setPerfis(response.data);
    }

    loadPerfis();
  }, []);

  const columns = [
    {
      title: 'PERFIL',
      field: 'nome',
    },
    {
      title: 'DESCRIÇÃO',
      field: 'descricao',
    },
    {
      title: 'STATUS',
      field: `status`,
      render: rowData =>
        rowData.status === true ? (
          <CheckCircleIcon style={{ color: green[500] }} />
        ) : (
          <HighlightOffIcon color="secondary" />
        ),
    },
  ];

  const actions = [
    {
      icon: 'perm_identity',
      tooltip: 'Iniciar Identificação',
      // onClick: (event, rowData) => handleClick(rowData.codProtocolo),
    },
    {
      icon: 'add_box',
      tooltip: 'Gerar protocolo',
      isFreeAction: true,
      iconProps: { color: 'primary', fontSize: 'large' },
      // onClick: () => handleOpenIdt(),
    },
  ];

  return (
    <Layout>
      <Container>
        <TableStyled
          data={perfis}
          columns={columns}
          actions={actions}
          title="Perfis cadastrados"
        />
      </Container>
    </Layout>
  );
}

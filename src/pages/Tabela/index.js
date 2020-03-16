import React, { useState, useEffect } from 'react';

import Layout from '~/template/Layout';
import { Container } from './styles';
import TableStyled from '~/utils/Table';

import api from '~/services/api';

export default function Tabela() {
  const [tabelas, setTabelas] = useState([]);

  useEffect(() => {
    async function loadTabelas() {
      const response = await api.get('/acl/tabelasapi');

      setTabelas(response.data);
    }

    loadTabelas();
  }, []);

  const columns = [
    {
      title: 'Tabela',
      field: 'nome',
      cellStyle: {
        textTransform: 'uppercase',
      },
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
          data={tabelas}
          columns={columns}
          actions={actions}
          title="Tabelas do banco de dados"
        />
      </Container>
    </Layout>
  );
}

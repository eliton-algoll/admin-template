import React, { useState, useEffect } from 'react';

import Layout from '~/template/Layout';
import { Container } from './styles';
import TableStyled from '~/utils/Table';

import api from '~/services/api';

export default function Coluna() {
  const [tabelas, setTabelas] = useState([]);
  const [colunas, setColunas] = useState([]);

  useEffect(() => {
    async function loadTabelas() {
      const response = await api.get('/acl/tabelasapi');

      setTabelas(response.data);
    }

    loadTabelas();
  }, []);

  async function detalheColunas(rowData) {
    // console.tron.log(rowData.codTabela);
    const response = await api.get(`/acl/colunassapi/${rowData.codTabela}`);

    setColunas(response.data);

    return (
      <ul>
        {colunas.map(coluna => (
          <li key={coluna.codColuna}>{coluna.nome}</li>
        ))}
      </ul>
    );
  }

  const columns = [
    {
      title: 'CodTabela',
      field: 'codTabela',
      hidden: true,
    },
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
          title="Colunas das Tabelas do banco de dados"
          // detailPanel={}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
        />
      </Container>
    </Layout>
  );
}

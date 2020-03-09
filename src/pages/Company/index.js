import React, { useEffect, useState } from 'react';

import TableStyled from '../../utils/Table';
import Layout from '~/template/Layout';
import api from '../../services/api';

import './styles.css';

export default function Company() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function loadOm() {
      const response = await api.get('/application/om');

      setCompanies(response.data);
    }

    loadOm();
    // eslint-disable-next-line
  }, []);

  const columns = [
    {
      title: 'RM',
      field: 'rm',
      render: rowData => `${`${rowData.rm}ª RM`}`,
    },
    {
      title: 'Número',
      field: 'numero',
      render: rowData => {
        return rowData.rm < 10
          ? `0${rowData.rm + rowData.numero}`
          : `${rowData.rm + rowData.numero}`;
      },
    },
    { title: 'Om', field: 'nome' },
    { title: 'Sigla', field: 'sigla' },
    {
      title: 'Cidade',
      field: `codCidade.nome`,
      render: rowData =>
        `${rowData.codCidade.nome} - ${rowData.codCidade.estado.sigla}`,
    },
    { title: 'Subordinação', field: 'subordinacao.nome' },
    {
      title: 'Kit-Bio',
      field: 'kitBio',
      render: rowData => `${rowData.kitBio === '1' ? 'Sim' : 'Não'}`,
    },
    {
      title: 'Status',
      field: 'status',
      render: rowData => `${rowData.status === true ? 'Ativo' : 'Inativo'}`,
    },
  ];

  const actions = [
    {
      icon: 'edit',
      tooltip: 'Editar',
    },
    {
      icon: 'delete',
      tooltip: 'Delete User',
    },
  ];

  return (
    <Layout>
      <TableStyled
        data={companies}
        columns={columns}
        actions={actions}
        title="Om's cadastradas"
      />
    </Layout>
  );
}

import React, { useState, useEffect } from 'react';

import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOffOutlined';
import { green } from '@material-ui/core/colors';
import Layout from '~/template/Layout';
import { Container } from './styles';
import TableStyled from '~/utils/Table';

import api from '~/services/api';

export default function Usuario() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/usuario/usuariosapi');

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  const columns = [
    {
      title: 'IDENTIDADE',
      field: 'idt',
      width: '150px',
    },
    {
      title: 'POSTO/GRAD',
      field: 'militar.postoGradCodigo.sigla',
      width: '150px',
    },
    {
      title: 'NOME',
      field: `nome`,
    },
    { title: 'PERFIL', field: 'perfil.nome' },
    {
      title: 'STATUS',
      field: 'status',
      width: '150px',
      render: rowData =>
        rowData.status === 1 ? (
          <CheckCircleIcon style={{ color: green[500] }} />
        ) : (
          <HighlightOffIcon color="secondary" />
        ),
    },
    { title: 'MOTIVO DO STATUS', field: 'motivoStatus' },
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
          data={users}
          columns={columns}
          actions={actions}
          title="Usuários cadastrados"
        />
      </Container>
    </Layout>
  );
}

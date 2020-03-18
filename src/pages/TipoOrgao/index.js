import React, { useState, useEffect } from 'react';

import Layout from '~/template/Layout';
import { Container } from './styles';
import TableStyled from '~/utils/Table';

import api from '~/services/api';

export default function TipoOrgao() {
  const [perfis, setPerfis] = useState([]);

  useEffect(() => {
    async function loadPerfis() {
      const response = await api.get('/application/tipoorgaoapi');

      setPerfis(response.data);
    }

    loadPerfis();
  }, []);

  const columns = [
    {
      title: 'TIPO de ÓRGÃO',
      field: 'nome',
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
          title="Tipos de Órgão de Identificação"
        />
      </Container>
    </Layout>
  );
}

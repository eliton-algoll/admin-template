import React, { useState, useEffect } from 'react';

import Layout from '~/template/Layout';
import { Container } from './styles';
import TableStyled from '~/utils/Table';

export default function Cartorio() {
  const data = query =>
    new Promise((resolve, reject) => {
      let url =
        'http://10.166.128.114/novosipex/public/identificacao/loadcartorios?';
      url += `per_page=${query.pageSize}`;
      url += `&page=${query.page + 1}`;
      fetch(url)
        .then(response => response.json())
        .then(result => {
          resolve({
            data: result.data,
            page: result.page - 1,
            totalCount: result.total,
          });
        });
    });

  const columns = [
    { title: 'CARTORIO', field: 'nome' },
    { title: 'NOME PARA IDENTIFICAÇÃO', field: 'nomeIdt' },
    { title: 'CEP', field: 'cep', width: '100px' },
    { title: 'UF', field: 'cidadeCod.estado.sigla', width: '50px' },
    { title: 'CIDADE', field: 'cidadeCod.nome', width: '100px' },
    { title: 'BAIRRO', field: 'bairro', width: '100px' },
    { title: 'ENDEREÇO', field: 'endereco' },
    { title: 'SITUAÇÃO', field: 'situacao', width: '100px' },
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
          data={data}
          columns={columns}
          actions={actions}
          title="Cartórios cadastrados"
        />
      </Container>
    </Layout>
  );
}

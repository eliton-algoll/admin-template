import React from 'react';

import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

function Table({ data, columns, title, actions }) {
  return (
    <MaterialTable
      className="tables"
      title={title}
      columns={columns}
      data={data}
      actions={actions}
      // style={{ overflowX: 'hidden' }}
      options={{
        actionsColumnIndex: -1,
        tableLayout: 'fixed',
        sorting: false,

        cellStyle: {
          fontSize: '12px',
        },
        headerStyle: {
          borderBottom: '1px solid #2a4f59',
          fontWeight: 'bold',
        },
        // eslint-disable-next-line
        rowStyle: x => {
          if (x.tableData.id % 2) {
            return { backgroundColor: '#f2f2f2' };
          }
        },
      }}
      localization={{
        pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
        },
        toolbar: {
          searchPlaceholder: 'Filtrar',
        },
        header: {
          actions: 'Ações',
        },
        body: {
          emptyDataSourceMessage: 'Nenhum registro encontrado',
        },
      }}
    />
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  columns: PropTypes.arrayOf.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf.isRequired,
};

export default Table;

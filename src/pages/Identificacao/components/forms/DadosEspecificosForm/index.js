import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Content } from './styles';

import DadosMilitar from './DadosMilitar';
import DadosPensionista from './DadosPensionista';
import DadosDependente from './DadosDependente';

function DadosEspecificosForm({ data }) {
  const [tipoPessoa, setTipoPessoa] = useState({});
  const [militar, setMilitar] = useState({});
  const [pensionista, setPensionista] = useState({});
  const [dependente, setDependente] = useState({});

  useEffect(() => {
    setTipoPessoa(data.tipoPessoa);
    setMilitar(data.militar);
    setPensionista(data.pensionista);
    setDependente(data.dependente);
  }, [data]);

  return (
    <Content>
      {tipoPessoa.codTipoPes === 0 && <DadosMilitar data={militar} />}
      {tipoPessoa.codTipoPes === 7 && <DadosPensionista data={pensionista} />}
      {tipoPessoa.codTipoPes === 5 && <DadosDependente data={dependente} />}
    </Content>
  );
}

DadosEspecificosForm.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default DadosEspecificosForm;

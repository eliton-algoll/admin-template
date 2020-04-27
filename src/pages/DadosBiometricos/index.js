import React, { useEffect, useState } from 'react';

import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '~/utils/Loading';

import Layout from '~/template/Layout';
import FormDadosBiometricos from './components/forms/DatiloscopicaForm';

import { Wrapper, HeaderWraper } from './styles';

import {
  cleanProtocoloRequest,
  protocoloRequest,
} from '~/store/modules/protocolo/actions';
import { coletaRequest } from '~/store/modules/coleta/actions';

function DadosBiometricos({ protocolo, match }) {
  const dispatch = useDispatch();
  const [pessoa, setPessoa] = useState({});
  const [tipoPessoa, setTipoPessoa] = useState({});
  const [loading, setLoading] = useState(true);
  const [formula, setFormula] = useState({});

  // carregando informações do protocolo
  useEffect(() => {
    async function loadProtocolo() {
      const codProtocolo = match.params.protocolo;
      dispatch(protocoloRequest(codProtocolo));
    }

    loadProtocolo();
  }, []);

  useEffect(() => {
    if (protocolo.pessoa) {
      setPessoa(protocolo.pessoa);
      setTipoPessoa(protocolo.codTipoPes);
      setFormula(protocolo.formulaDatiloscopica);
      setLoading(false);
    }
  }, [protocolo]);

  // carregando informações da coleta
  useEffect(() => {
    async function loadColeta() {
      dispatch(coletaRequest(pessoa.idt));
    }
    if (pessoa.idt) {
      loadColeta();
    }
  }, [pessoa]);

  // limpa os dados do protocolo quando o componente é desmontando evitando que seja
  // renderizado dados errados no formulário
  useEffect(() => {
    return () => {
      dispatch(cleanProtocoloRequest());
    };
  }, []);

  return (
    <Layout>
      {loading && <Loading open={loading} />}
      <Wrapper>
        <HeaderWraper>
          <h1>Nr Protocolo: </h1> <span>{protocolo.codProtocolo}</span>
          <h1>Identidade: </h1> <span>{pessoa.idt}</span>
          <h1>Tipo de Pessoa: </h1> <span>{tipoPessoa.descricao}</span>
          <h1>Motivo: </h1> <span>{protocolo.motivo}</span>
        </HeaderWraper>
        <FormDadosBiometricos formula={formula} />
      </Wrapper>
    </Layout>
  );
}

DadosBiometricos.propTypes = {
  protocolo: PropTypes.objectOf,
  match: PropTypes.objectOf.isRequired,
};

DadosBiometricos.defaultProps = {
  protocolo: {},
};

export default connect(state => ({
  protocolo: state.protocolo.protocolo,
}))(DadosBiometricos);

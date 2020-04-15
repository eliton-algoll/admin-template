import React, { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import { changeTabs } from '~/store/modules/protocolo/actions';

import { Content } from './styles';

import DadosMilitar from './DadosMilitar';
import DadosPensionista from './DadosPensionista';
import DadosDependente from './DadosDependente';

const schema = Yup.object().shape({
  // pais: Yup.string().required('O país é obrigatório'),
});

function DadosEspecificosForm({ data }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();
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

  function handleBack() {
    dispatch(changeTabs(3));
  }

  async function handleSubmit(dataForm) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      await schema.validate(dataForm, {
        abortEarly: false,
      });

      dispatch(changeTabs(5));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
      return;
    }

    console.tron.log('formulario de identificacao', dataForm);
  }

  return (
    <Content>
      <Form ref={formRef} name="identificacaoForm" onSubmit={handleSubmit}>
        {tipoPessoa.codTipoPes === 0 && <DadosMilitar data={militar} />}
        {tipoPessoa.codTipoPes === 7 && <DadosPensionista data={pensionista} />}
        {tipoPessoa.codTipoPes === 5 && <DadosDependente data={dependente} />}
        <div className="action-button">
          <Button
            variant="contained"
            color="primary"
            onClick={handleBack}
            type="submit"
            startIcon={<Icon>arrow_left</Icon>}
          >
            Retornar
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Icon>arrow_right</Icon>}
          >
            Avançar
          </Button>
        </div>
      </Form>
    </Content>
  );
}

DadosEspecificosForm.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default DadosEspecificosForm;

import React, { useState, useRef } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import { changeTabs } from '~/store/modules/protocolo/actions';

import { Content } from './styles';

import CertidaoNova from './CertidaoNova';
import CertidaoAntiga from './CertidaoAntiga';

const schema = Yup.object().shape({
  // nome: Yup.string().required('A nome é obrigatório'),
  // nomeMae: Yup.string().required('A nome da mãe é obrigatório'),
  // nomePai: Yup.string().required('A nome do pai é obrigatório'),
  // dtNascimento: Yup.string().required('A data de nascimento é obrigatório'),
});

export default function CertidoesForm() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [modeloCertificado, setModeloCertificado] = useState('0');

  function handleModelo(e) {
    setModeloCertificado(e.target.value);
  }

  function handleBack() {
    dispatch(changeTabs(1));
  }

  async function handleSubmit(dataForm) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      await schema.validate(dataForm, {
        abortEarly: false,
      });

      dispatch(changeTabs(3));
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
        <div className="row-1">
          <div className="col-1">
            <FormControl component="fieldset">
              <FormLabel component="legend">Modelo de certidão</FormLabel>
              <RadioGroup
                row
                aria-label="modeloCertidao"
                name="modeloCertidao"
                value={modeloCertificado}
                onChange={handleModelo}
              >
                <FormControlLabel
                  value="0"
                  control={<Radio color="primary" />}
                  label="Modelo Novo"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio color="primary" />}
                  label="Modelo Antigo"
                />
              </RadioGroup>
            </FormControl>

            {modeloCertificado === '0' && <CertidaoNova />}
            {modeloCertificado === '1' && <CertidaoAntiga />}
          </div>
        </div>
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

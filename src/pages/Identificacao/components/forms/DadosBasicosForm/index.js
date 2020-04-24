import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'unform-material-ui';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import { Content } from './styles';

import { changeTabs } from '~/store/modules/protocolo/actions';

import api from '~/services/api';

// validações

const schema = Yup.object().shape({
  nome: Yup.string().required('A nome é obrigatório'),
  nomeMae: Yup.string().required('A nome da mãe é obrigatório'),
  nomePai: Yup.string().required('A nome do pai é obrigatório'),
  dtNascimento: Yup.string().required('A data de nascimento é obrigatório'),
});

function DadosBasicosForm({ data }) {
  const dispatch = useDispatch();
  const [pessoa, setPessoa] = useState({});
  const formRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    const pess = { ...pessoa, [name]: value };

    formRef.current.setFieldError(event.currentTarget.name);

    setPessoa(pess);
  }

  async function handleSubmit(dataForm) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      await schema.validate(dataForm, {
        abortEarly: false,
      });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }

    const response = await api.post('/identificacao/identificarapi', dataForm);

    console.tron.log('retornmo da api ', response.data);

    dispatch(changeTabs(1));
    console.tron.log('formulario de identificacao', dataForm);
  }

  useEffect(() => {
    const {
      nome,
      cpf,
      nomeSocial,
      nomeMae,
      nomePai,
      dtNascimento,
      dataPrimeiraIdt,
      estadoCivil,
      sexo,
      dni,
      cnh,
      pisPasep,
      idtSitEsp,
    } = data;

    setPessoa({
      nome,
      cpf,
      nomeSocial,
      nomeMae,
      nomePai,
      dtNascimento,
      dataPrimeiraIdt,
      estadoCivil,
      sexo,
      dni,
      cnh,
      pisPasep,
      idtSitEsp,
    });
  }, [data]);

  return (
    <Content>
      <Form ref={formRef} name="identificacaoForm" onSubmit={handleSubmit}>
        <div className="row-1">
          <div className="col-1">
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              value={pessoa.nome}
              InputLabelProps={{
                shrink: !!pessoa.nome,
              }}
              id="nome"
              name="nome"
              onChange={handleChange}
              label="Nome"
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="nomeSocial"
              name="nomeSocial"
              onChange={handleChange}
              label="Nome Social"
              value={pessoa.nomeSocial}
              InputLabelProps={{
                shrink: !!pessoa.nomeSocial,
              }}
              type="text"
              style={{ display: 'none' }}
              fullWidth
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="nomeMae"
              name="nomeMae"
              onChange={handleChange}
              label="Nome Mãe"
              value={pessoa.nomeMae}
              InputLabelProps={{
                shrink: !!pessoa.nomeMae,
              }}
              type="text"
              fullWidth
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="nomePai"
              onChange={handleChange}
              name="nomePai"
              label="Nome Pai"
              value={pessoa.nomePai}
              InputLabelProps={{
                shrink: !!pessoa.nomePai,
              }}
              type="text"
              fullWidth
            />
          </div>
          <div className="col-line" />
          <div className="col-2">
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="dtNascimento"
              name="dtNascimento"
              onChange={handleChange}
              label="Nascimento"
              value={pessoa.dtNascimento}
              InputLabelProps={{
                shrink: !!pessoa.dtNascimento,
              }}
              type="date"
            />
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="cpf"
              name="cpf"
              label="CPF"
              value={pessoa.cpf}
              InputLabelProps={{
                shrink: !!pessoa.cpf,
              }}
              inputProps={{
                maxLength: 11,
              }}
              type="text"
            />
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="dataPrimeiraIdt"
              name="dataPrimeiraIdt"
              onChange={handleChange}
              value={pessoa.dataPrimeiraIdt}
              InputLabelProps={{
                shrink: !!pessoa.dataPrimeiraIdt,
              }}
              label="Data da 1° Identificação"
              type="date"
            />
          </div>
        </div>
        <div className="row-line" />
        <div className="row-2">
          <div className="col-3">
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="estadoCivil"
              name="estadoCivil"
              onChange={handleChange}
              value={pessoa.estadoCivil}
              label="Estado Civil"
              select
              SelectProps={{
                native: true,
              }}
            >
              <option value=" ">--Selecione--</option>
              <option value="1">Solteiro</option>
              <option value="2">Casado</option>
              <option value="3">Desquitado</option>
              <option value="4">Divorciado</option>
              <option value="5">Viúvo</option>
              <option value="6">Outros</option>
              <option value="7">Separado Judicialmente</option>
            </TextField>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="sexo"
              name="sexo"
              onChange={handleChange}
              value={pessoa.sexo}
              label="Sexo"
              select
              SelectProps={{
                native: true,
              }}
            >
              <option value=" ">--Selecione--</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
            </TextField>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="dni"
              name="dni"
              onChange={handleChange}
              InputLabelProps={{
                shrink: !!pessoa.dni,
              }}
              label="DNI"
              type="text"
            />
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="cnh"
              name="cnh"
              onChange={handleChange}
              value={pessoa.cnh}
              InputLabelProps={{
                shrink: !!pessoa.cnh,
              }}
              label="CNH"
              type="text"
            />
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="pisPasep"
              name="pisPasep"
              onChange={handleChange}
              label="Pis/Pasep"
              value={pessoa.pisPasep}
              InputLabelProps={{
                shrink: !!pessoa.pisPasep,
              }}
              type="text"
            />
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="idtSitEsp"
              name="idtSitEsp"
              onChange={handleChange}
              value={pessoa.idtSitEsp}
              InputLabelProps={{
                shrink: !!pessoa.idtSitEsp,
              }}
              label="Situação Especial"
              select
              SelectProps={{
                native: true,
              }}
            >
              <option value=" ">--Selecione--</option>
              <option value="1">Nenhum</option>
              <option value="2">Impossibilitado de Assinar - Interdito</option>
              <option value="3">Impossibilitada de Assinar - Interdita</option>
              <option value="4">Impossibilitado de Assinar - Invalidez</option>
              <option value="7">Impossibilitada de Assinar - Invalidez</option>
              <option value="5">Não alfabetizado</option>
              <option value="6">Não alfabetizada</option>
            </TextField>
          </div>
        </div>
        <div className="action-button">
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

DadosBasicosForm.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default DadosBasicosForm;

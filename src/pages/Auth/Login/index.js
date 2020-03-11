import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Form } from '@unform/web';
import { TextField } from 'unform-material-ui';
import Button from '@material-ui/core/Button';
import { Container } from './styles';
import { loginRequest } from '~/store/modules/auth/actions';

import history from '~/services/history';

import logoDsm from '~/assets/images/logodsm.png';

const schema = Yup.object().shape({
  identidade: Yup.string().required('A identidade é obrigatória'),
  senha: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  function handleChange(event) {
    formRef.current.setFieldError(event.currentTarget.name);
  }

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      await schema.validate(data, {
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
      return;
    }

    dispatch(loginRequest(data.identidade, data.senha));

    /*
    const response = await api.post('/loginapi', data);

    if (response.data.error) {
      alert(response.data.error);
      return;
    }
*/
    history.push('/login');
  }
  return (
    <>
      <CssBaseline />
      <Container>
        <img src={logoDsm} alt="Diretoria de Serviço Militar" />
        <h1>SIPEX</h1>
        <p>
          <small>Sistema de identificação do pessoal do Exército</small>
        </p>
        <p>
          <Form ref={formRef} onSubmit={handleSubmit} name="buscaForm">
            <div className="row">
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="identidade"
                name="identidade"
                label="Identidade"
                onChange={handleChange}
                type="text"
                fullWidth
              />

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="senha"
                name="senha"
                label="Senha"
                type="password"
                onChange={handleChange}
                fullWidth
              />
              <Button
                variant="contained"
                className="buttonSubmit"
                color="primary"
                type="submit"
              >
                Entrar
              </Button>
            </div>
          </Form>
        </p>
      </Container>
    </>
  );
}

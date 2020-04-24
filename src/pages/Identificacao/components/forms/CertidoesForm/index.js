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
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { changeTabs } from '~/store/modules/protocolo/actions';

import { Content } from './styles';

import CertidaoNova from './CertidaoNova';
import CertidaoAntiga from './CertidaoAntiga';

import api from '~/services/api';

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
  const [formData, setFormData] = useState({ tipoServico: '55' });
  const [tipoCertidao, setTipoCertidao] = useState({});
  const [certidao, setCertidao] = useState('');
  const [cartorio, setCartorio] = useState({});
  const [averbacao, setAverbacao] = useState('');

  function handleModelo(e) {
    setModeloCertificado(e.target.value);
  }

  function handleBack() {
    dispatch(changeTabs(1));
  }

  const handleChange = async event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    if (event.target.name === 'cartorio') {
      const dadosCartorio = await api.get(
        `/identificacao/cartorio/dadosCartorio/${event.target.value}`
      );
      const { nome, nomeIdt, cidade } = dadosCartorio.data;
      setCartorio({
        nome,
        nomeIdt,
        cidade: [cidade.nome],
        estado: [cidade.estadoEleitoral.sigla],
      });
    }

    switch (formData.tipoRegistro) {
      case '1':
        setTipoCertidao({
          ...tipoCertidao,
          registro: 'Reg Nasc nº',
          tipoLivro: `lv A ${formData.nr}`,
          // tipoLivro: `lv A ${Number(formData.nr).toString()}`,
        });
        break;
      case '2':
        setTipoCertidao({
          ...tipoCertidao,
          registro: 'Reg Cas nº',
          tipoLivro: `lv B ${formData.nr}`,
        });
        break;
      case '3':
        setTipoCertidao({
          ...tipoCertidao,
          registro: 'Reg Cas nº',
          tipoLivro: `lv B-Aux ${formData.nr}`,
        });
        break;
      case '4':
        setTipoCertidao({
          ...tipoCertidao,
          registro: 'Reg Óbito nº',
          tipoLivro: `lv C ${formData.nr}`,
        });
        break;
      case '5':
        setTipoCertidao({
          ...tipoCertidao,
          registro: 'Reg Nat Morto nº',
          tipoLivro: `lv C-Aux ${formData.nr}`,
        });
        break;
      case '6':
        setTipoCertidao({
          ...tipoCertidao,
          registro: 'Reg Proc nº',
          tipoLivro: `lv D ${formData.nr}`,
        });
        break;
      default:
    }
  };

  const handleChangeAverbacao = event => {
    const option = event.target.options[event.target.selectedIndex].text;
    if (certidao && option !== '-- Selecione --') {
      const averb = ` Averb. ${option}`;

      setAverbacao(averb);
    }
    if (option === '-- Selecione --') {
      setAverbacao('');
    }
  };

  const loadDigito = async () => {
    if (formData.cartorio) {
      const hashCertificado =
        formData.cartorio +
        formData.acervo +
        formData.tipoServico +
        formData.anoRegistro +
        formData.tipoRegistro +
        formData.nr +
        formData.folha +
        formData.termo;

      const response = await api.get(
        `/identificacao/certidaoDV/${hashCertificado}`
      );

      setFormData({
        ...formData,
        digito: response.data.digito,
      });

      const data = parseISO(formData.dataExp);
      setCertidao(
        `${tipoCertidao.registro} ${formData.termo}-${response.data.digito}, ${
          cartorio.nomeIdt
        }-${cartorio.estado}, ${tipoCertidao.tipoLivro}, Fl ${
          formData.folha
        }, Exp ${format(data, "dd'/'MM'/'yyyy", {
          locale: pt,
        })}.`
      );
    }
  };

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

            {modeloCertificado === '0' && (
              <CertidaoNova
                handleChange={handleChange}
                formData={formData}
                certidao={certidao}
                handleChangeAverbacao={handleChangeAverbacao}
                loadDigito={loadDigito}
                averbacao={averbacao}
              />
            )}
            {modeloCertificado === '1' && (
              <CertidaoAntiga
                handleChange={handleChange}
                formData={formData}
                certidao={certidao}
                handleChangeAverbacao={handleChangeAverbacao}
                loadDigito={loadDigito}
                averbacao={averbacao}
              />
            )}
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

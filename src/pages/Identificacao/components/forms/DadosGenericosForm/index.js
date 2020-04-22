import React, { useState, useEffect, useRef } from 'react';

import { TextField } from 'unform-material-ui';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';
import Icon from '@material-ui/core/Icon';
import { changeTabs } from '~/store/modules/protocolo/actions';

import { Content } from './styles';

import api from '~/services/api';

const schema = Yup.object().shape({
  pais: Yup.number().required('O país é obrigatório'),
  uf: Yup.number().required('UF é obrigatório'),
  cidadeCodigoNatural: Yup.string().required('A cidade é obrigatória'),
});

function DadosGenericosForm({ data }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [paises, setPaises] = useState([]);
  const [protocolo, setProtocolo] = useState({});
  const [dadosGenericos, setDadosGenericos] = useState({});
  const [estadoEleitoral, setEstadoEleitoral] = useState({});
  const [cidades, setCidades] = useState([
    { codigo: null, nome: '--Selecione--' },
  ]);

  useEffect(() => {
    async function loadPaises() {
      const response = await api.get('/identificacao/findpaises');

      setPaises(response.data);
    }

    loadPaises();
  }, []);

  useEffect(() => {
    const {
      sitEstrangeiro,
      sitEstrPortaria,
      tipoSangue,
      fatorRh,
      docComprovaTipoSanguineo,
      origemComprovanteTipoSangui,
      tituloEleitor,
      secaoTe,
      zonaTe,
    } = data.pessoa;

    setDadosGenericos({
      sitEstrangeiro,
      sitEstrPortaria,
      tipoSangue,
      fatorRh,
      docComprovaTipoSanguineo,
      origemComprovanteTipoSangui,
      tituloEleitor,
      secaoTe,
      zonaTe,
    });

    if (data.protocolo.cidadeEleitoral) {
      const { codigo: cidadeCodigoEle } = data.protocolo.cidadeEleitoral;
      const { codigo: ufEle } = data.protocolo.cidadeEleitoral.estadoEleitoral;

      setEstadoEleitoral({ codigo: ufEle });
      setDadosGenericos({ ...dadosGenericos, cidadeCodigoEle, ufEle });
    }

    setProtocolo(data.protocolo);
  }, [data]);

  useEffect(() => {
    async function loadCidades() {
      if (estadoEleitoral && estadoEleitoral.codigo) {
        const response = await api.get(
          `/identificacao/findCidadeByPais/0/${estadoEleitoral.codigo}`
        );

        setCidades(response.data);
      }
    }

    loadCidades();
  }, [estadoEleitoral]);

  async function handleChangeUf(e) {
    const response = await api.get(
      `/identificacao/findCidadeByPais/0/${e.target.value}`
    );
    setCidades(response.data);
  }

  function handleBack() {
    dispatch(changeTabs(0));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const dados = { ...dadosGenericos, [name]: value };

    formRef.current.setFieldError(event.currentTarget.name);

    setDadosGenericos(dados);
  }

  async function handleSubmit(dataForm) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      await schema.validate(dataForm, {
        abortEarly: false,
      });

      dispatch(changeTabs(2));
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

  const estados = [
    { codigo: null, estado: '--Selecione--' },
    { codigo: '1', estado: 'AC' },
    { codigo: '2', estado: 'AM' },
    { codigo: '3', estado: 'AP' },
    { codigo: '4', estado: 'AL' },
    { codigo: '5', estado: 'BA' },
    { codigo: '6', estado: 'CE' },
    { codigo: '7', estado: 'DF' },
    { codigo: '8', estado: 'GO' },
    { codigo: '9', estado: 'MA' },
    { codigo: '11', estado: 'MS' },
    { codigo: '12', estado: 'MG' },
    { codigo: '13', estado: 'MT' },
    { codigo: '14', estado: 'PA' },
    { codigo: '15', estado: 'PB' },
    { codigo: '16', estado: 'PE' },
    { codigo: '17', estado: 'PI' },
    { codigo: '18', estado: 'PR' },
    { codigo: '19', estado: 'RJ' },
    { codigo: '20', estado: 'RN' },
    { codigo: '21', estado: 'RO' },
    { codigo: '22', estado: 'RR' },
    { codigo: '23', estado: 'RS' },
    { codigo: '24', estado: 'SC' },
    { codigo: '25', estado: 'SE' },
    { codigo: '26', estado: 'SP' },
    { codigo: '27', estado: 'TO' },
    { codigo: '31', estado: 'ES' },
    { codigo: '999', estado: 'XX' },
  ];

  return (
    <Content>
      <Form ref={formRef} name="identificacaoForm" onSubmit={handleSubmit}>
        <div className="row-1">
          <div className="col-1">
            <div className="nascimento">
              <DialogContentText>Local de Nascimento</DialogContentText>
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="pais"
                name="pais"
                onChange={handleChange}
                value={protocolo.pais}
                label="País"
                select
                SelectProps={{
                  native: true,
                }}
              >
                <option value=" ">--Selecione--</option>
                {paises.map(pais => (
                  <option value={pais.codigo}>{pais.nome}</option>
                ))}
              </TextField>

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="uf"
                name="uf"
                onChange={handleChange}
                value={protocolo.estado}
                label="Uf"
                select
                SelectProps={{
                  native: true,
                }}
              >
                {estados.map(uf => (
                  <option value={uf.codigo}>{uf.estado}</option>
                ))}
              </TextField>

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="cidadeCodigoNatural"
                name="cidadeCodigoNatural"
                onChange={handleChange}
                label="Cidade"
                value={protocolo.cidade ? protocolo.cidade.nome : ''}
                type="text"
              />

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="sitEstrangeiro"
                name="sitEstrangeiro"
                onChange={handleChange}
                label="Estrangeiro/Naturalizado"
                value={dadosGenericos.sitEstrangeiro}
                select
                SelectProps={{
                  native: true,
                }}
              >
                <option value={null}>-- Selecione --</option>
                <option value="1">Brasileiro</option>
                <option value="2">Estrangeiro</option>
                <option value="3">
                  Brasileiro nascido fora do Brasil - Pais em Sv
                </option>
                <option value="4">Brasileiro nascido fora do Brasil</option>
                <option value="5">Brasileiro(a) Naturalizado(a)</option>
              </TextField>

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="sitEstrPortaria"
                name="sitEstrPortaria"
                label="Portaria"
                onChange={handleChange}
                value={dadosGenericos.sitEstrPortaria}
                type="text"
              />
            </div>
            <div className="sangue">
              <DialogContentText>Sangue</DialogContentText>
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="tipoSangue"
                name="tipoSangue"
                label="Sangue"
                onChange={handleChange}
                value={dadosGenericos.tipoSangue}
                select
                SelectProps={{
                  native: true,
                }}
              >
                <option value={null}>-- Selecione --</option>
                <option value="0">Tipo O</option>
                <option value="1">Tipo A</option>
                <option value="2">Tipo B</option>
                <option value="3">Tipo AB</option>
              </TextField>

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="fatorRh"
                name="fatorRh"
                label="Fator RH"
                onChange={handleChange}
                value={dadosGenericos.fatorRh}
                select
                SelectProps={{
                  native: true,
                }}
              >
                <option value={null}>-- Selecione --</option>
                <option value="0">Positivo</option>
                <option value="1">Negativo</option>
              </TextField>

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="docComprovaTipoSanguineo"
                name="docComprovaTipoSanguineo"
                label="Documento"
                onChange={handleChange}
                value={dadosGenericos.docComprovaTipoSanguineo}
                select
                SelectProps={{
                  native: true,
                }}
              >
                <option value={null}>-- Selecione --</option>
                <option value="ATESTADO">Atestado</option>
                <option value="BOLETIM INTERNO">Boletim Interno</option>
                <option value="OFICIO">Ofício</option>
                <option value="PARTE">Parte</option>
                <option value="OUTROS">Outros</option>
              </TextField>

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="origemComprovanteTipoSangui"
                name="origemComprovanteTipoSangui"
                label="Comprovante"
                onChange={handleChange}
                value={dadosGenericos.origemComprovanteTipoSangui}
                type="text"
              />
            </div>

            <div className="titulo-eleitoral">
              <DialogContentText>Título eleitoral</DialogContentText>
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="tituloEleitor"
                name="tituloEleitor"
                label="Titulo eleitoral"
                onChange={handleChange}
                value={dadosGenericos.tituloEleitor}
                type="text"
              />

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="secaoTe"
                name="secaoTe"
                label="Seção"
                onChange={handleChange}
                value={dadosGenericos.secaoTe}
                type="text"
              />
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="zonaTe"
                name="zonaTe"
                label="Zona"
                onChange={handleChange}
                value={dadosGenericos.zonaTe}
                type="text"
              />

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="ufEle"
                name="ufEle"
                value={dadosGenericos.ufEle ? dadosGenericos.ufEle : null}
                label="Uf título eleitoral"
                onChange={handleChangeUf}
                select
                SelectProps={{
                  native: true,
                }}
              >
                {estados.map(uf => (
                  <option value={uf.codigo}>{uf.estado}</option>
                ))}
              </TextField>

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="cidadeCodigoEle"
                name="cidadeCodigoEle"
                label="Cidade título eleitoral"
                value={
                  dadosGenericos.cidadeCodigoEle
                    ? dadosGenericos.cidadeCodigoEle
                    : null
                }
                select
                SelectProps={{
                  native: true,
                }}
              >
                {cidades.map(cidade => (
                  <option value={cidade.codigo}>{cidade.nome}</option>
                ))}
              </TextField>
            </div>
          </div>
        </div>
        <div className="row-line" />
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

DadosGenericosForm.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default DadosGenericosForm;

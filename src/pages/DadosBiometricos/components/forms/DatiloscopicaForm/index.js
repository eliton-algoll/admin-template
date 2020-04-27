import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';

import { TextField } from 'unform-material-ui';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import DigitalIcon from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import { changeTabs } from '~/store/modules/protocolo/actions';

import { Content } from './styles';

import imageDefault from '~/assets/images/user.png';
// import digitalDefault from '~/assets/images/loading.gif';
import assinaturaDefault from '~/assets/images/assinatura.jpeg';

const schema = Yup.object().shape({
  // pais: Yup.string().required('O país é obrigatório'),
});

function DatiloscopicaForm({ coleta, digitais, formula }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [formulaDatiloscopica, setFormulaDatiloscopica] = useState('');

  const digitalDefault = (
    <>
      <DigitalIcon style={{ fontSize: 120 }} />
      <span>Carregando Digital...</span>
    </>
  );

  const handleChange = event => {
    const { value } = event.target;
    const { name } = event.target;
    setFormulaDatiloscopica({ ...formulaDatiloscopica, [name]: value });
  };

  useEffect(() => {
    if (formula) {
      setFormulaDatiloscopica(formula);
    }
  }, [formula]);

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
      return;
    }

    console.tron.log('formulario de identificacao', dataForm);
  }

  return (
    <Content>
      <Form ref={formRef} name="identificacaoForm" onSubmit={handleSubmit}>
        <div className="row-1">
          <div className="col-1">
            <div className="row-dedos">
              <div className="dedo-digital">
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  id="formulaPD"
                  name="formulaPD"
                  label="Polegar"
                  type="text"
                  onChange={handleChange}
                  value={formulaDatiloscopica.formulaPD}
                  InputLabelProps={{
                    shrink: !!formulaDatiloscopica.formulaPD,
                  }}
                />
                {digitais[1] ? (
                  <img
                    src={`data:image/png;base64,${digitais[1].digital}`}
                    alt="polegar Direito"
                  />
                ) : (
                  digitalDefault
                )}
              </div>
              <div className="dedo-digital">
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  id="formulaID"
                  name="formulaID"
                  label="Indicador"
                  type="text"
                  onChange={handleChange}
                  value={formulaDatiloscopica.formulaID}
                  InputLabelProps={{
                    shrink: !!formulaDatiloscopica.formulaID,
                  }}
                />
                {digitais[2] ? (
                  <img
                    src={`data:image/png;base64,${digitais[2].digital}`}
                    alt="indicador Direito"
                  />
                ) : (
                  digitalDefault
                )}
              </div>
              <div className="dedo-digital">
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  id="formulaMD"
                  name="formulaMD"
                  label="Médio"
                  type="text"
                  onChange={handleChange}
                  value={formulaDatiloscopica.formulaMD}
                  InputLabelProps={{
                    shrink: !!formulaDatiloscopica.formulaMD,
                  }}
                />
                {digitais[3] ? (
                  <img
                    src={`data:image/png;base64,${digitais[3].digital}`}
                    alt="anelar Direito"
                  />
                ) : (
                  digitalDefault
                )}
              </div>
              <div className="dedo-digital">
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  id="formulaAD"
                  name="formulaAD"
                  label="Anelar"
                  type="text"
                  onChange={handleChange}
                  value={formulaDatiloscopica.formulaAD}
                  InputLabelProps={{
                    shrink: !!formulaDatiloscopica.formulaAD,
                  }}
                />
                {digitais[4] ? (
                  <img
                    src={`data:image/png;base64,${digitais[4].digital}`}
                    alt="médio Direito"
                  />
                ) : (
                  digitalDefault
                )}
              </div>
              <div className="dedo-digital">
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  id="formulaMID"
                  name="formulaMID"
                  label="Mínimo"
                  type="text"
                  onChange={handleChange}
                  value={formulaDatiloscopica.formulaMID}
                  InputLabelProps={{
                    shrink: !!formulaDatiloscopica.formulaMID,
                  }}
                />
                {digitais[5] ? (
                  <img
                    src={`data:image/png;base64,${digitais[5].digital}`}
                    alt="mínimo Direito"
                  />
                ) : (
                  digitalDefault
                )}
              </div>
            </div>

            <div className="row-dedos">
              <div className="dedo-digital">
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  id="formulaPE"
                  name="formulaPE"
                  label="Polegar"
                  type="text"
                  onChange={handleChange}
                  value={formulaDatiloscopica.formulaPE}
                  InputLabelProps={{
                    shrink: !!formulaDatiloscopica.formulaPE,
                  }}
                />
                {digitais[6] ? (
                  <img
                    src={`data:image/png;base64,${digitais[6].digital}`}
                    alt="polegar esquerdo"
                  />
                ) : (
                  digitalDefault
                )}
              </div>
              <div className="dedo-digital">
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  id="formulaIE"
                  name="formulaIE"
                  label="Indicador"
                  type="text"
                  onChange={handleChange}
                  value={formulaDatiloscopica.formulaIE}
                  InputLabelProps={{
                    shrink: !!formulaDatiloscopica.formulaIE,
                  }}
                />
                {digitais[7] ? (
                  <img
                    src={`data:image/png;base64,${digitais[7].digital}`}
                    alt="indicador esquerdo"
                  />
                ) : (
                  digitalDefault
                )}
              </div>
              <div className="dedo-digital">
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  id="formulaME"
                  name="formulaME"
                  label="Médio"
                  type="text"
                  onChange={handleChange}
                  value={formulaDatiloscopica.formulaME}
                  InputLabelProps={{
                    shrink: !!formulaDatiloscopica.formulaME,
                  }}
                />
                {digitais[8] ? (
                  <img
                    src={`data:image/png;base64,${digitais[8].digital}`}
                    alt="anelar esquerdo"
                  />
                ) : (
                  digitalDefault
                )}
              </div>
              <div className="dedo-digital">
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  id="formulaAE"
                  name="formulaAE"
                  label="Anelar"
                  type="text"
                  onChange={handleChange}
                  value={formulaDatiloscopica.formulaAE}
                  InputLabelProps={{
                    shrink: !!formulaDatiloscopica.formulaAE,
                  }}
                />
                {digitais[9] ? (
                  <img
                    src={`data:image/png;base64,${digitais[9].digital}`}
                    alt="médio esquerdo"
                  />
                ) : (
                  digitalDefault
                )}
              </div>
              <div className="dedo-digital">
                <TextField
                  autoFocus
                  variant="outlined"
                  margin="dense"
                  id="formulaMIE"
                  name="formulaMIE"
                  label="Mínimo"
                  type="text"
                  onChange={handleChange}
                  value={formulaDatiloscopica.formulaMIE}
                  InputLabelProps={{
                    shrink: !!formulaDatiloscopica.formulaMIE,
                  }}
                />
                {digitais[10] ? (
                  <img
                    src={`data:image/png;base64,${digitais[10].digital}`}
                    alt="mínimo esquerdo"
                  />
                ) : (
                  digitalDefault
                )}
              </div>
            </div>
            <div className="formula">
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="formulaPrimaria"
                name="formulaPrimaria"
                label="Fórmula primária"
                type="text"
                inputProps={{ readOnly: true }}
                value={formulaDatiloscopica.formulaPrimaria}
                InputLabelProps={{
                  shrink: !!formulaDatiloscopica.formulaPrimaria,
                }}
              />
            </div>
            <div className="assinatura">
              {coleta.imagens ? (
                <img
                  src={`data:image/png;base64,${coleta.imagens.imgAssinatura}`}
                  alt="assinatura"
                />
              ) : (
                <img src={assinaturaDefault} alt="assinatura-default" />
              )}
            </div>
            <div className="dedo-inpresso">
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="tipoDedoUtilizadoIdtId"
                name="tipoDedoUtilizadoIdtId"
                label="Dedo a ser impresso"
                select
                SelectProps={{ native: true }}
              >
                <option value={null}>-- Selecione --</option>
                <option value="PD">Polegar Direito</option>
                <option value="PE">Polegar Esquerdo</option>
                <option value="ID">Indicador Direito</option>
                <option value="IE">Indicador Esquerdo</option>
                <option value="MD">Médio Direito</option>
                <option value="ME">Médio Esquerdo</option>
                <option value="AD">Anular Direito</option>
                <option value="AE">Anular Esquerdo</option>
                <option value="MID">Mínimo Direito</option>
                <option value="MIE">Mínimo Esquerdo</option>
              </TextField>
            </div>
          </div>
          <div className="col-foto">
            {coleta.imagens ? (
              <img
                src={`data:image/png;base64,${coleta.imagens.imgFoto}`}
                alt="foto"
              />
            ) : (
              <img src={imageDefault} alt="foto-default" />
            )}
          </div>
        </div>
        <div className="row-2">
          <div>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="formulaPrimaria"
              name="formulaPrimaria"
              label="Possui anomalia"
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="formulaPrimaria"
              name="formulaPrimaria"
              label="Tipo de anomalia"
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="formulaPrimaria"
              name="formulaPrimaria"
              label="Possui amputação"
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="formulaPrimaria"
              name="formulaPrimaria"
              label="Observação sobre as Mãos"
              type="text"
              multiline
            />
          </div>
        </div>
        <div className="action-button">
          <Button
            variant="contained"
            color="primary"
            // onClick={handleBack}
            startIcon={<Icon>arrow_left</Icon>}
          >
            Retornar
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Icon>save</Icon>}
          >
            Finalizar
          </Button>
        </div>
      </Form>
    </Content>
  );
}

DatiloscopicaForm.propTypes = {
  coleta: PropTypes.objectOf,
  digitais: PropTypes.objectOf,
  formula: PropTypes.objectOf,
};

DatiloscopicaForm.defaultProps = {
  coleta: {},
  digitais: {},
  formula: {},
};

export default connect(state => ({
  coleta: state.coleta.coleta,
  digitais: state.coleta.digitais,
}))(DatiloscopicaForm);

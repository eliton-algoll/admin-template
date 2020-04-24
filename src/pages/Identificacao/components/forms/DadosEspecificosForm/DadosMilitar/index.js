import React, { useState, useEffect } from 'react';

import { TextField } from 'unform-material-ui';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from 'prop-types';
import { Content } from '../styles';

function DadosMilitar({ data }) {
  const [militar, setMilitar] = useState({});
  const [om, setOm] = useState({});
  const [promocao, setPromocao] = useState({});

  useEffect(() => {
    setMilitar(data.militar);
    setOm(data.om);
    setPromocao(data.promocao);
  }, [data]);
  return (
    <Content>
      <div className="row-1">
        <div className="col-1">
          <div>
            <DialogContentText>Dados Militar</DialogContentText>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="nomeGuerra"
              name="nomeGuerra"
              label="Nome de guerra"
              value={militar.nomeGuerra}
              InputLabelProps={{
                shrink: true,
              }}
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="milTypeIdt"
              name="milTypeIdt"
              value={militar.milTypeIdt}
              label="Situação militar"
              select
              SelectProps={{ native: true }}
            >
              <option value={null}>-- Selecione --</option>
              <option value="MAOC">Oficial de Carreira</option>
              <option value="M_ATV_OF_T">Oficial Temporário</option>
              <option value="MAPC">Praça de Carreira</option>
              <option value="MAPT">Praça Temporário</option>
              <option value="M_R_R1_OF">Oficial R1</option>
              <option value="M_R_R1_PR">Praça R1</option>
              <option value="M_R_R2_OF">Oficial R2</option>
              <option value="M_R_R2_PR">Praça R2</option>
              <option value="MIL_EXCL">Militar Excluído</option>
              <option value="M_REFORMA">Militar Reformado</option>
              <option value="MIN_AP_STM">Ministro Aposentado do STM</option>
              <option value="INST_EXCLU">Inst pensão excl</option>
              <option value="INST_FALEC">Inst pensão Mil Flcd</option>
            </TextField>

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="postoGradCodigo"
              name="postoGradCodigo"
              label="Posto/Graduação"
              value={militar.postoGrad}
              select
              SelectProps={{ native: true }}
            >
              <option value={null}>-- Selecione --</option>
              <option value="1">Mar</option>
              <option value="2">Gen Ex</option>
              <option value="3">Gen Div</option>
              <option value="4">Gen Bda</option>
              <option value="11">Cel</option>
              <option value="12">Ten Cel</option>
              <option value="13">Maj</option>
              <option value="15">Cap</option>
              <option value="16">1º Ten</option>
              <option value="17">2º Ten</option>
              <option value="18">Asp</option>
              <option value="21">S Ten</option>
              <option value="22">1º Sgt</option>
              <option value="23">2º Sgt</option>
              <option value="24">3º Sgt</option>
              <option value="42">Cb</option>
              <option value="44">Sd</option>
              <option value="49">Sd Rcr</option>
              <option value="51">T M</option>
              <option value="52">T1</option>
              <option value="53">T2</option>
              <option value="54">Cad 1º A</option>
              <option value="55">Cad 2º A</option>
              <option value="56">Cad 3º A</option>
              <option value="57">Cad 4º A</option>
              <option value="58">Al</option>
              <option value="59">Al IME 1º</option>
              <option value="60">Al EPC</option>
              <option value="61">Al IME 2º</option>
              <option value="62">Al IME 3º</option>
              <option value="63">Al IME 4º</option>
              <option value="64">AlEsSgt</option>
              <option value="65">AlFPrRe</option>
            </TextField>

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="omCodom"
              name="omCodom"
              label="OM Sigla"
              value={om.sigla}
              type="text"
            />
          </div>
          <div>
            <br />
            <DialogContentText>Dados de Promoção</DialogContentText>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="postoGradPromo"
              name="postoGradPromo"
              label="Posto/Graduação"
              value={promocao.postoGrad}
              select
              SelectProps={{ native: true }}
            >
              <option value={null}>-- Selecione --</option>
              <option value="1">Mar</option>
              <option value="2">Gen Ex</option>
              <option value="3">Gen Div</option>
              <option value="4">Gen Bda</option>
              <option value="11">Cel</option>
              <option value="12">Ten Cel</option>
              <option value="13">Maj</option>
              <option value="15">Cap</option>
              <option value="16">1º Ten</option>
              <option value="17">2º Ten</option>
              <option value="18">Asp</option>
              <option value="21">S Ten</option>
              <option value="22">1º Sgt</option>
              <option value="23">2º Sgt</option>
              <option value="24">3º Sgt</option>
              <option value="42">Cb</option>
              <option value="44">Sd</option>
              <option value="49">Sd Rcr</option>
              <option value="51">T M</option>
              <option value="52">T1</option>
              <option value="53">T2</option>
              <option value="54">Cad 1º A</option>
              <option value="55">Cad 2º A</option>
              <option value="56">Cad 3º A</option>
              <option value="57">Cad 4º A</option>
              <option value="58">Al</option>
              <option value="59">Al IME 1º</option>
              <option value="60">Al EPC</option>
              <option value="61">Al IME 2º</option>
              <option value="62">Al IME 3º</option>
              <option value="63">Al IME 4º</option>
              <option value="64">AlEsSgt</option>
              <option value="65">AlFPrRe</option>
            </TextField>

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="docTipoIdt"
              name="docTipoIdt"
              label="Tipo de documento"
              value={promocao.docTipoIdt}
              select
              SelectProps={{
                native: true,
              }}
            >
              <option value={null}>--Selecione--</option>
              <option value="BI">BI</option>
              <option value="Bol">Bol</option>
              <option value="D.O.U.">D.O.U.</option>
              <option value="Bol DGP">Bol DGP</option>
            </TextField>

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="docPromocao"
              name="docPromocao"
              value={promocao.docPromocao}
              label="Doc da promoção"
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="dtDocPromocao"
              name="dtDocPromocao"
              label="Data da promoção"
              value={promocao.dtDocPromocao}
              InputLabelProps={{
                shrink: !!promocao.dtDocPromocao,
              }}
              type="text"
            />
          </div>
          {militar.milType === '0' && (
            <div style={{ width: '800px' }}>
              <br />
              <DialogContentText>
                Convocação/Prorrogação - Engajamento/Reengajamento
              </DialogContentText>
              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="dtInicio"
                name="dtInicio"
                label="Data de início"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="dtFim"
                name="dtFim"
                label="Data fim"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          )}
          <div style={{ width: '800px' }}>
            <br />
            <DialogContentText> Dados da Carteira </DialogContentText>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="complemento"
              name="complemento"
              label="Complemento da carteira"
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="validade"
              name="validade"
              label="Validade"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      </div>
    </Content>
  );
}

DadosMilitar.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default DadosMilitar;

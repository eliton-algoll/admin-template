import React, { useState } from 'react';

import { TextField } from 'unform-material-ui';
import { Content } from './styles';

import imageDefault from '~/assets/images/user.png';
import digitalDefault from '~/assets/images/digital.jpg';
import assinaturaDefault from '~/assets/images/assinatura.jpeg';

export default function DatiloscopicaForm() {
  return (
    <Content>
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
              />
              <img src={digitalDefault} alt="polegar Direito" />
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
              />
              <img src={digitalDefault} alt="indicador Direito" />
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
              />
              <img src={digitalDefault} alt="anelar Direito" />
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
              />
              <img src={digitalDefault} alt="médio Direito" />
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
              />
              <img src={digitalDefault} alt="mÍNIMO Direito" />
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
              />
              <img src={digitalDefault} alt="polegar esquerdo" />
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
              />
              <img src={digitalDefault} alt="indicador esquerdo" />
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
              />
              <img src={digitalDefault} alt="anelar esquerdo" />
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
              />
              <img src={digitalDefault} alt="médio esquerdo" />
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
              />
              <img src={digitalDefault} alt="mÍNIMO esquerdo" />
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
            />
          </div>
          <div className="assinatura">
            <img src={assinaturaDefault} alt="assinatura" />
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
          <img src={imageDefault} alt="foto" />
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
    </Content>
  );
}

import React, { useState } from 'react';

import { TextField } from 'unform-material-ui';
import { Content } from './styles';

import imageDefault from '~/assets/images/user.png';

export default function CaracteristicasForm() {
  const [pessoa, setPessoa] = useState({});

  return (
    <Content>
      <div className="row-1">
        <div className="col-1">
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="cutis"
            name="cutis"
            label="Cútis"
            select
            SelectProps={{ native: true }}
          >
            <option value={null}>-- Selecione --</option>
            <option value="branca">Branca</option>
            <option value="morena">Morena</option>
            <option value="parda">Parda</option>
            <option value="Pd Cl">Parda Clara</option>
            <option value="Pd Esc">Parda Escura</option>
            <option value="preta">Preta</option>
          </TextField>

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="olhos"
            name="olhos"
            label="Olho"
            select
            SelectProps={{ native: true }}
          >
            <option value={null}>-- Selecione --</option>
            <option value="azul">Azul</option>
            <option value="azul Cl">Azul Claro</option>
            <option value="Cast Cl">Castanho Claro</option>
            <option value="Cast Esc">Castanho Escuro</option>
            <option value="Cast Med">Castanho Médio</option>
            <option value="Esverd">Esverdeado</option>
            <option value="verde">Verde</option>
          </TextField>

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="cabelo"
            name="cabelo"
            label="Cabelos"
            select
            SelectProps={{ native: true }}
          >
            <option value={null}>-- Selecione --</option>
            <option value="Alour Carap">Alourado Carapinha</option>
            <option value="Alour Cresp">Alourado Crespo</option>
            <option value="Alour Lis">Alourado Liso</option>
            <option value="Alour Ond">Alourado Ondulado</option>
            <option value="Averm Carap">Avermelhado Carapinha</option>
            <option value="Averm Cresp">Avermelhado Crespo</option>
            <option value="Averm Lis">Avermelhado Liso</option>
            <option value="Averm Ond">Avermelhado Ondulado</option>
            <option value="Cast Cl Carap">Castanho Claro Carapinha</option>
            <option value="Cast Cl Cresp">Castanho Claro Crespo</option>
            <option value="Cast Cl Lis">Castanho Claro Liso</option>
            <option value="Cast Cl Ond">Castanho Claro Ondulado</option>
            <option value="Cast Esc Carap">Castanho Escuro Carapinha</option>
            <option value="Cast Esc Cresp">Castanho Escuro Crespo</option>
            <option value="Cast Esc Lis">Castanho Escuro Liso</option>
            <option value="Cast Esc Ond">Castanho Escuro Ondulado</option>
            <option value="Cast Med Carap">Castanho Medio Carapinha</option>
            <option value="Cast Med Cresp">Castanho Medio Crespo</option>
            <option value="Cast Med Lis">Castanho Medio Liso</option>
            <option value="Cast Med Ond">Castanho Medio Ondulado</option>
            <option value="Encanecido Carap">Encanecido Carapinha</option>
            <option value="Encanecido Cresp">Encanecido Crespo</option>
            <option value="Encanecido Lis">Encanecido Liso</option>
            <option value="Encanecido Ond">Encanecido Ondulado</option>
            <option value="Gris">Grisalho</option>
            <option value="Lig Gris">Ligeiramente Grisalho</option>
            <option value="Lour Carap">Louro Carapinha</option>
            <option value="Lour Cresp">Louro Crespo</option>
            <option value="Lour Lis">Louro Liso</option>
            <option value="Lour Ond">Louro Ondulado</option>
            <option value="Preto Carap">Preto Carapinha</option>
            <option value="Preto Cresp">Preto Crespo</option>
            <option value="Preto Lis">Preto Liso</option>
            <option value="Preto Ond">Preto Ondulado</option>
            <option value="Ruivo Carap">Ruivo Carapinha</option>
            <option value="Ruivo Cresp">Ruivo Crespo</option>
            <option value="Ruivo Lis">Ruivo Liso</option>
            <option value="Ruivo Ond">Ruivo Ondulado</option>
            <option value="Tingido">Tingido</option>
          </TextField>

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="bigode"
            name="bigode"
            label="Bigode"
            select
            SelectProps={{ native: true }}
          >
            <option value={null}>-- Selecione --</option>
            <option value="aparado">Aparado</option>
            <option value="rapado">Rapado</option>
            <option value="imberbe">Imberbe</option>
          </TextField>

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="barba"
            name="barba"
            label="Barba"
            select
            SelectProps={{ native: true }}
          >
            <option value={null}>-- Selecione --</option>
            <option value="C">Com</option>
            <option value="S">Sem</option>
            <option value="I">Imberbe</option>
          </TextField>

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="cabeca"
            name="cabeca"
            label="Anomalia na cabeça"
            select
            SelectProps={{ native: true }}
          >
            <option value={null}>-- Selecione --</option>
            <option value="MICROCEFALIA">Microcefalia</option>
            <option value="MACROCEFALIA">Macrocefalia</option>
          </TextField>

          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="sinaisParticulares"
            name="sinaisParticulares"
            label="Sinais particulares"
            type="text"
            multiline
          />
        </div>
      </div>
    </Content>
  );
}

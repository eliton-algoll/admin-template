import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'unform-material-ui';
import { Content } from './styles';

function DadosBasicosForm({ data }) {
  const [pessoa, setPessoa] = useState({});

  useEffect(() => {
    setPessoa(data);
  }, [data]);

  return (
    <Content>
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
            id="nascimento"
            name="nascimento"
            label="Nascimento"
            value={pessoa.dtNascimento}
            InputLabelProps={{
              shrink: !!pessoa.dtNascimento,
            }}
            type="text"
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
            type="text"
          />
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="dtExpedicao"
            name="dtExpedicao"
            value={pessoa.dataPrimeiraIdt}
            InputLabelProps={{
              shrink: !!pessoa.dataPrimeiraIdt,
            }}
            label="Data da 1° Identificação"
            type="text"
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
            value={pessoa.dni}
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
    </Content>
  );
}

DadosBasicosForm.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default DadosBasicosForm;

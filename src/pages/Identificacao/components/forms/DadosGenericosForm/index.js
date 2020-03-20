import React, { useState, useEffect } from 'react';

import { TextField } from 'unform-material-ui';
import PropTypes from 'prop-types';

import DialogContentText from '@material-ui/core/DialogContentText';
import { Content } from './styles';

import api from '~/services/api';

function DadosGenericosForm({ data }) {
  const [paises, setPaises] = useState([]);
  const [protocolo, setProtocolo] = useState({});
  const [pessoa, setPessoa] = useState({});
  const [cidadeEleitoral, setCidadeEleitoral] = useState({});
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
    setPessoa(data.pessoa);
    setCidadeEleitoral(data.protocolo.cidadeEleitoral);
    setEstadoEleitoral(data.protocolo.cidadeEleitoral.estadoEleitoral);
    setProtocolo(data.protocolo);
  }, [data]);

  useEffect(() => {
    async function loadCidades() {
      if (estadoEleitoral.codigo) {
        const response = await api.get(
          `/identificacao/findCidadeByPais/0/${estadoEleitoral.codigo}`
        );
        console.tron.log('cidades', response.data);

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
      <div className="row-1">
        <div className="col-1">
          <div className="nascimento">
            <DialogContentText>Nascimento</DialogContentText>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="pais"
              name="pais"
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
              label="Estrangeiro/Naturalizado"
              value={pessoa.sitEstrangeiro}
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
              value={pessoa.sitEstrPortaria}
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
              value={pessoa.tipoSangue}
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
              value={pessoa.fatorRh}
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
              value={pessoa.docComprovaTipoSanguineo}
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
              value={pessoa.origemComprovanteTipoSangui}
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
              value={pessoa.tituloEleitor}
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="secaoTe"
              name="secaoTe"
              label="Seção"
              value={pessoa.secaoTe}
              type="text"
            />
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="zonaTe"
              name="zonaTe"
              label="Zona"
              value={pessoa.zonaTe}
              type="text"
            />

            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              id="ufEle"
              name="ufEle"
              value={estadoEleitoral ? estadoEleitoral.codigo : null}
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
              value={cidadeEleitoral ? cidadeEleitoral.codigo : null}
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
    </Content>
  );
}

DadosGenericosForm.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default DadosGenericosForm;

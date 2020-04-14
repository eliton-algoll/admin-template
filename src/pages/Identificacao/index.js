import React, { useState, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import FingerPrintIcon from '@material-ui/icons/Fingerprint';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import DescriptionIcon from '@material-ui/icons/Description';
import LineSyleIcon from '@material-ui/icons/LineStyle';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Form } from '@unform/web';
import { useDispatch, connect } from 'react-redux';
import Layout from '~/template/Layout';
import history from '~/services/history';

import {
  protocoloRequest,
  cleanProtocoloRequest,
} from '~/store/modules/protocolo/actions';

import { coletaRequest } from '~/store/modules/coleta/actions';

// forms
import DadosBasicosForm from './components/forms/DadosBasicosForm';
import DadosGenericosForm from './components/forms/DadosGenericosForm';
import DadosEspecificosForm from './components/forms/DadosEspecificosForm';
import CertidoesForm from './components/forms/CertidoesForm';
import CaracteristicasForm from './components/forms/CaracteristicasForm';
import DatiloscopicaForm from './components/forms/DatiloscopicaForm';

import { Wrapper, HeaderWraper } from './styles';

// validações

const schemaDadosBasicos = Yup.object().shape({
  nome: Yup.string().required('A nome é obrigatório'),
  nomeMae: Yup.string().required('A nome da mãe é obrigatório'),
  nomePai: Yup.string().required('A nome do pai é obrigatório'),
  dtNascimento: Yup.string().required('A data de nascimento é obrigatório'),
  asdasd: Yup.string().required('asdasd é obrigatório'),
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function tabTitleProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Identificacao({ protocolo, match }) {
  const formIdtRef = useRef(null);
  const dispatch = useDispatch();
  const [pessoa, setPessoa] = useState({});
  const [tipoPessoa, setTipoPessoa] = useState({});
  const [militar, setMilitar] = useState({});
  const [pensionista, setPensionista] = useState({});
  const [dependente, setDependente] = useState({});

  // const [caracteristicas, setCaracteristicas] = useState({});

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleBack() {
    history.push('/protocolo');
  }

  // carregando informações do protocolo
  useEffect(() => {
    async function loadProtocolo() {
      const codProtocolo = match.params.protocolo;
      dispatch(protocoloRequest(codProtocolo));
    }

    loadProtocolo();
  }, []);

  // carregando informações da coleta
  useEffect(() => {
    async function loadColeta() {
      dispatch(coletaRequest(pessoa.idt));
    }
    if (pessoa.idt) {
      loadColeta();
    }
  }, [pessoa]);

  useEffect(() => {
    if (protocolo.pessoa) {
      setPessoa(protocolo.pessoa);
      setTipoPessoa(protocolo.codTipoPes);
      setPensionista(protocolo.pensionista);
      setDependente(protocolo.dependente);
      setMilitar({
        om: protocolo.om,
        militar: protocolo.militar,
        promocao: protocolo.promocao,
      });
    }
  }, [protocolo]);

  // limpa os dados do protocolo quando o componente é desmontando evitando que seja
  // renderizado dados errados no formulário
  useEffect(() => {
    return () => {
      dispatch(cleanProtocoloRequest());
    };
  }, []);

  async function handleSubmitIdentificacao(data) {
    console.tron.log(data);
    try {
      // Remove all previous errors
      formIdtRef.current.setErrors({});

      await schemaDadosBasicos.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.tron.log(err);
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formIdtRef.current.setErrors(validationErrors);
      }
      return;
    }
    console.tron.log('formulario de identificacao', data);
  }

  function handleChangeForm(e) {
    console.tron.log(e);
  }

  return (
    <Layout>
      <Wrapper>
        <HeaderWraper>
          <h1>Nr Protocolo: </h1> <span>{protocolo.codProtocolo}</span>
          <h1>Identidade: </h1> <span>{pessoa.idt}</span>
          <h1>Tipo de Pessoa: </h1> <span>{tipoPessoa.descricao}</span>
          <h1>Motivo: </h1> <span>{protocolo.motivo}</span>
        </HeaderWraper>

        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="off"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab
                label="Dados básicos"
                icon={<PersonOutlineIcon />}
                {...tabTitleProps(0)}
              />
              <Tab
                label="Dados genéricos"
                icon={<AssignmentIcon />}
                {...tabTitleProps(1)}
              />
              <Tab
                label="Certidões"
                icon={<DescriptionIcon />}
                {...tabTitleProps(2)}
              />
              <Tab
                label="Características físicas"
                icon={<PersonPinIcon />}
                {...tabTitleProps(3)}
              />
              <Tab
                label="Dados Específicos"
                icon={<LineSyleIcon />}
                {...tabTitleProps(4)}
              />
              <Tab
                label="Individuais datiloscópica"
                icon={<FingerPrintIcon />}
                {...tabTitleProps(5)}
              />
            </Tabs>
          </AppBar>
          <Form
            ref={formIdtRef}
            name="identificacaoForm"
            onSubmit={handleSubmitIdentificacao}
          >
            <TabPanel value={value} index={0}>
              <DadosBasicosForm data={pessoa} formRef={formIdtRef} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <DadosGenericosForm data={{ pessoa, protocolo }} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <CertidoesForm />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <CaracteristicasForm data={pessoa} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <DadosEspecificosForm
                data={{ tipoPessoa, militar, pensionista, dependente }}
              />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <DatiloscopicaForm />
            </TabPanel>
            <Button variant="outlined" type="submit" style={{ width: '100px' }}>
              Salvar
            </Button>
          </Form>
        </div>
        <Button
          variant="outlined"
          style={{ width: '100px' }}
          onClick={handleBack}
        >
          Voltar
        </Button>
      </Wrapper>
    </Layout>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

Identificacao.propTypes = {
  protocolo: PropTypes.objectOf,
  match: PropTypes.objectOf.isRequired,
};

Identificacao.defaultProps = {
  protocolo: {},
};

export default connect(state => ({ protocolo: state.protocolo.protocolo }))(
  Identificacao
);

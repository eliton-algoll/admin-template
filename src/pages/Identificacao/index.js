import React, { useState, useEffect } from 'react';
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

import { protocoloRequest } from '~/store/modules/protocolo/actions';

// forms
import DadosBasicosForm from './components/forms/DadosBasicosForm';
import DadosGenericosForm from './components/forms/DadosGenericosForm';
import DadosEspecificosForm from './components/forms/DadosEspecificosForm';
import CertidoesForm from './components/forms/CertidoesForm';
import CaracteristicasForm from './components/forms/CaracteristicasForm';
import DatiloscopicaForm from './components/forms/DatiloscopicaForm';

import { Wrapper, HeaderWraper } from './styles';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
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
  const dispatch = useDispatch();
  const [pessoa, setPessoa] = useState({});
  const [tipoPessoa, setTipoPessoa] = useState({});
  const [militar, setMilitar] = useState({});
  const [pensionista, setPensionista] = useState({});
  const [dependente, setDependente] = useState({});
  const [certidao, setCertidao] = useState({});
  const [caracteristicas, setCaracteristicas] = useState({});

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleBack() {
    history.push('/protocolo');
  }

  useEffect(() => {
    async function loadProtocolo() {
      const codProtocolo = match.params.protocolo;
      dispatch(protocoloRequest(codProtocolo));
    }

    loadProtocolo();
  }, []);

  useEffect(() => {
    if (protocolo.pessoa) {
      setPessoa(protocolo.pessoa);
    }
  }, [protocolo]);

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
                {...a11yProps(0)}
              />
              <Tab
                label="Dados genéricos"
                icon={<AssignmentIcon />}
                {...a11yProps(1)}
              />
              <Tab
                label="Certidões"
                icon={<DescriptionIcon />}
                {...a11yProps(2)}
              />
              <Tab
                label="Características físicas"
                icon={<PersonPinIcon />}
                {...a11yProps(3)}
              />
              <Tab
                label="Dados Específicos"
                icon={<LineSyleIcon />}
                {...a11yProps(4)}
              />
              <Tab
                label="Individuais datiloscópica"
                icon={<FingerPrintIcon />}
                {...a11yProps(5)}
              />
            </Tabs>
          </AppBar>
          <Form name="identificacaoForm">
            <TabPanel value={value} index={0}>
              <DadosBasicosForm data={pessoa} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <DadosGenericosForm data={{ pessoa, protocolo }} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <CertidoesForm />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <CaracteristicasForm />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <DadosEspecificosForm data={pessoa} />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <DatiloscopicaForm />
            </TabPanel>
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

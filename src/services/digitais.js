import axios from 'axios';

const digitais = axios.create({
  baseURL: 'http://10.166.128.114:8080/',
});

export default digitais;

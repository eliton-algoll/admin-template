import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.166.128.114/novosipex/public',
});

export default api;

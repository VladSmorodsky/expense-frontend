import axios from "axios";

axios.defaults.withCredentials = true;

axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Origin': '*',
  'Accept': 'application/json'
};

export default axios;
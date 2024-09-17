import axios from 'axios';
import {BASE_URL} from './urls';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL;

export default axiosClient;
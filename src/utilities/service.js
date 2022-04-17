import axios from 'axios';

import { getToken } from './authentication'
import { BASE_URL } from '../config';


function service() {
    const axiosService = axios.create({
      baseURL: BASE_URL
    });

    axiosService.defaults.headers.common['Authorization']  = `JWT ${getToken()}`;
    return axiosService;
  }

export { service }

import axios from "axios";
import { BASE_URL } from '../../config';

export function login(data) {
    return axios.post(`${BASE_URL}/auth`, data);
}

export function register(data) {
    return axios.post(`${BASE_URL}/users`, data);
}
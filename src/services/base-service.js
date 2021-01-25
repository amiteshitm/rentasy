import axios from 'axios';
export const BASE_URL = "https://renteasy.ml";

export const publicAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
  });
  
  const getToken = () => {
      return localStorage.getItem('token');
  }
export const privateAxios = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Authorization': `Basic ${getToken()}` 
      }
  });

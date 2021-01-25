import axios from "axios";
import BASE_URL from "../api/apiEndPoint";

let api = {};

const instance = axios.create({
  baseURL: URL.BASE_URL,
});


let getDefaultHeaders = () => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve({
        "content-type": "application/json",
        Authorization: `Basic ${localStorage.getItem("token")}` 

      });
    } catch (error) {
      reject(error);
    }
  });
};

api.get = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const headers = await getDefaultHeaders();
      const response = await instance.get(`${BASE_URL}${url}`, {
        headers: headers,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

api.post = (url, parameters) => {
  return new Promise(async (resolve, reject) => {
    try {
      const headers = await getDefaultHeaders();
      const response = await instance.post(`${BASE_URL}${url}`, parameters, {
        headers: headers,
      });
      resolve(response);
    } catch (error) {
      console.log("inside the error" + error);
      reject(error);
    }
  });
};

api.put = async (url, parameters) => {
  return new Promise(async (resolve, reject) => {
    instance
      .put(`${BASE_URL}${url}`, parameters)
      .then(function (response) {
        console.log("befor response api put" + response);
        resolve(response.data);
      })
      .catch(function (error) {
        console.log(error);
        reject(error.response);
      });
  });
};

api.delete = (url) => {
  return new Promise(async (resolve, reject) => {
    instance
      .delete(`${BASE_URL}${url}`)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error.response);
      });
  });
};

export default api;

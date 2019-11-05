import axios from 'axios';
import { toastr } from 'react-redux-toastr'; 

const BASE_URL = process.env.REACT_APP_BASE_URL;
axios.interceptors.response.use(function (response) {
  if([201,204].includes(response.status)) {
    toastr.success('Success', 'Operation sucessfull.'); 
  }
  return response;
}, function (error) {
  toastr.error('Error', error.message); 
  return Promise.reject(error);
});

export const list = async(query) => {
  try {
    const response = await axios.get(`${BASE_URL}tools?${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const remove = async(toolId) => {
  try {
    const response = await axios.delete(`${BASE_URL}tools/${toolId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const create = async(tool) => {
  try {
    const response = await axios.post(`${BASE_URL}tools`, tool);
    return response.data;
  } catch (error) {
    console.log(error);
  }  
};
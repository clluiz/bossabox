import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

export const list = async(query) => {
  try {
    const response = await axios.get(`${BASE_URL}tools?${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
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
}
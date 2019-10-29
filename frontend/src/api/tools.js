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
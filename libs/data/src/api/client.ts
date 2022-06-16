import axios from 'axios';

export default axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 5000,
});

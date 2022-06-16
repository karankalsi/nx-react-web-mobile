import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 1500 * 60 * 1000, //15 Minutes
});

export default axios.create({
  adapter: cache.adapter,
  baseURL: 'https://swapi.dev/api/',
  timeout: 20000,
});

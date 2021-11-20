import axios from 'axios';

const createFilm = (data) => axios.post(
  `${process.env.VUE_APP_API_URL}/film`,
  data,
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

const getGenre = axios.get(
  `${process.env.VUE_APP_API_URL}/genre`,
);

const getProducer = axios.get(
  `${process.env.VUE_APP_API_URL}/producer`,
);

const getLead = axios.get(
  `${process.env.VUE_APP_API_URL}/lead`,
);

const getFilms = (data) => axios.get(
  `${process.env.VUE_APP_API_URL}/films?page=${data}`,
);

const loginUser = (data) => axios.post(
  `${process.env.VUE_APP_API_URL}/login`,
  data,
);

const registerUser = (data) => axios.post(
  `${process.env.VUE_APP_API_URL}/registration`,
  data,
);

const setHeader = (headerName, headerValue) => {
  axios.defaults.headers.common[headerName] = headerValue;
};

export default {
  createFilm,
  getGenre,
  getProducer,
  getLead,
  getFilms,
  loginUser,
  registerUser,
  setHeader,
};

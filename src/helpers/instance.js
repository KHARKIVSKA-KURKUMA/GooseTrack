import axios from 'axios';

// const {REACT_APP_API_URL} = process.env;

const REACT_APP_API_URL = 'https://goosetrack-tj84.onrender.com';

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});

const setToken = token => {
  if (token) {
    instance.defaults.headers.common.authorization = `Bearer ${token}`;
    console.log(instance.defaults.headers.common);
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
  localStorage.setItem('refreshToken', '');
};


instance.interceptors.response.use(
  response => response,
  async error => {
    if (
      error.response.status === 401 &&
      error.response.data.message === 'Not authorized'
    ) {
     
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        // if (error.response.data.message === 'Token does not valid') {
        //   setToken();
        //   localStorage.setItem('refreshToken', '')
        // }
        const { data } = await instance.post('/auth/refresh', { refreshToken });
          setToken(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
  
        // return instance(error.config);
        return Promise.reject(error);
      } catch (error) {
        // if (error.response.data.message === 'Token does not valid') {

        //   setToken();
        //   localStorage.setItem('refreshToken', '');
        // }
        console.log('catch error refresh>>>>>>>', error);
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = async data => {
  const { data: result } = await instance.post('/auth/register', data);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/auth/login', data);
  setToken(result.accessToken);
  localStorage.setItem('refreshToken', result.refreshToken);

  return result;
};

export const logout = async () => {
  const data = await instance.post('/auth/logout');
  setToken();
  return data;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/auth/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};



export default instance;

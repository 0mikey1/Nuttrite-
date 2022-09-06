import axios from "axios";

export async function getCurrentUser() {
  const res = await axios.get('/api/current_user');
  return res.data.data;
}

export async function register(params) {
  const res = await axios.post('/api/register', params);
  return res.data.data;
}

export async function login(params) {
  const res = await axios.post('/api/login', params);
  return res.data.data;
}

export async function logout(params) {
  const res = await axios.get('/api/logout');
  return res.data.data;
}

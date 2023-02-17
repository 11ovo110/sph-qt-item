export const SET_TOKEN = (token) => {
  localStorage.setItem('token', token);
}

export const GET_TOKEN = () => {
  return localStorage.getItem('token');
}

export const REMOVE_TOKEN = () => {
  localStorage.removeItem('token');
}
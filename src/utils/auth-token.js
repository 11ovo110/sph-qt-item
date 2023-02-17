// 本地读取 token
export const GET_TOKEN = () => {
  return localStorage.getItem('token');
}

// 本地设置 token
export const SET_TOKEN = (token) => {
  localStorage.setItem('token', token);
}

// 本地删除 token
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('token');
}
const token = localStorage.getItem('token');
const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};

const axiosHeader = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...authHeaders,
  },
};

export { axiosHeader };

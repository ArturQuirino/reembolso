import axios from 'axios';

const baseURL = 'https://api-front-end-challenge.buildstaging.com/api';

const api = axios.create({ baseURL });

const ApiRepository = {
  getHeader: async () => {
    return await api.get('header');
  },

  getTimeLine: async () => {
    return await api.get('timeline');
  },

  getSideBar: async () => {
    return await api.get('sidebar');
  },

  addExpense: async (payload) => {
    debugger;
    return await api.post('expense/add', payload);
  },
};

export default ApiRepository;

import axios from 'axios';

const url = 'http://localhost:5000/';

export const fetchOrders = () => axios.get(url);
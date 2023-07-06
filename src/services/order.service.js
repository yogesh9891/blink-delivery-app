import axios from 'axios';
import {axiosApiInstance} from '../../App';
import {url} from './url.service';

const serverUrl = url + '/userOrder';

export const getOrdersForDeliveryBoy = async query => {
  return await axiosApiInstance.get(`${serverUrl}/getOrdersForDeliveryBoy?${query}`);
};

export const getDashboardDataApi = async id => {
  return await axios.get(`${serverUrl}/getDeliveryDashboardData/${id}`);
};

export const getOrderById = async id => {
  return await axiosApiInstance.get(`${serverUrl}/getOrder/${id}`);
};

export const getUserOrderApi = (query) => {
  console.log(`${serverUrl}/getOrder?level=1`)
  return axiosApiInstance.get(`${serverUrl}/?${query}`);
};


export const updateOrderStatusDelivery = async (id,formData) => {
  return await axiosApiInstance.patch(`${serverUrl}/delivery/updateOrderStatusDelivery/${id}`,formData);
};

export const orderDeliveredApi = async (id,formData) => {
  return await axiosApiInstance.patch(`${serverUrl}/delivery/orderDelivered/${id}`,formData);
};





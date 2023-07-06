import axios from "axios";
import { axiosApiInstance } from "../../App";
import { url } from "./url.service";
const serverUrl = url + "/userAddress";

export const getUserAddresses = (query) => {
    console.log(`${url}/userAddress?${query}`,"userAddresss urrl")
    return axiosApiInstance.get(`${url}/userAddress?${query}`);
}

export const getAddressFromLocation = (formData) => {
    return axiosApiInstance.post(`${url}/userAddress/get-address-from-lat-long`,formData);
}

export const addAddressApi = (formData) => {
    return axiosApiInstance.post(`${serverUrl}/`,formData);
}
export const deleteAddressApi = (id) => {
    return axiosApiInstance.delete(`${serverUrl}/deleteById/${id}`);
}

export const getAddressApi = (query) => {

    console.log(`${serverUrl}/?${query}`,"useradddress api")
    return axiosApiInstance.get(`${serverUrl}/?${query}`);
}
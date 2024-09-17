import axiosClient from './instance';

export async function getRequest(URL, params) {
const response = axiosClient.get(`${URL}`, {params: params});
return response;
}
import axios from 'axios';
import { API_URL } from '../global/globalEnv';

export const signUp = async (data) => {
	// pass body and call endpoint
	const endpoint = `${API_URL}/api/users/signup`;
	return axios.post(endpoint, data);
};

export const signIn = async (data) => {
	const endpoint = `${API_URL}/api/users/signin`;
	return axios.post(endpoint, data);
};

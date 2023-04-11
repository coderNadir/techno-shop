import axios from 'axios';

// call API based on env mode
const API_URL =
	process.env.NODE_ENV === 'production'
		? process.env.REACT_APP_REMOTE_API_URL
		: process.env.REACT_APP_LOCAL_API_URL;

export const signUp = async (data) => {
	// pass body and call endpoint
	const endpoint = `${API_URL}/api/users/signup`;
	return axios.post(endpoint, data);
};

export const signIn = async (data) => {
	const endpoint = `${API_URL}/api/users/signin`;
	return axios.post(endpoint, data);
};

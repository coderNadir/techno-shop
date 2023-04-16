import axios from 'axios';

import { API_URL } from '../global/globalEnv';

export const fetchCategories = async () => {
	const endpoint = `${API_URL}/api/categories`;
	return axios.get(endpoint);
};

export const API_URL =
	process.env.NODE_ENV === 'production'
		? process.env.REACT_APP_REMOTE_API_URL
		: process.env.REACT_APP_LOCAL_API_URL;

import axios, { AxiosInstance } from 'axios';
import { API_BACKEND_URL } from '../config';

export class AxiosAuthInstance {
	protected authAxios: AxiosInstance;

	constructor(token: string) {
		this.authAxios = axios.create({
			baseURL: API_BACKEND_URL,
			headers: { Accept: 'application/json', Authorization: token },
		});
	}
}

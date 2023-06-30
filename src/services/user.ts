import axios from 'axios';

import { API_BACKEND_URL, API_PATH_USER_CODE, API_PATH_USER_LOGIN } from '../config';

import { errorApiBackend } from './utils';

export class UserServices {
	static axiosInstance = axios.create({
		baseURL: API_BACKEND_URL,
		headers: { Accept: 'application/json' },
	});

	static generateCode = async (email: string) => {
		const data = { email };

		try {
			const res = await this.axiosInstance.post<{ message: string; code: string }>(API_PATH_USER_CODE, data);
			return res.data;
		} catch (err) {
			return errorApiBackend(err);
		}
	};

	static login = async (email: string, code: string) => {
		const data = { email, code };

		try {
			// ! Tengo que tener cuidado, ya que no se si enviar el token en la respuesta o como cookie
			const res = await this.axiosInstance.post<{ message: string; token: string }>(API_PATH_USER_LOGIN, data);
			return res.data;
		} catch (err) {
			return errorApiBackend(err);
		}
	};
}

import axios from 'axios';

import { API_PATH_USER, API_PATH_USER_CODE, API_PATH_USER_LOGIN, API_PATH_USER_VALIDATE_TOKEN } from '@/config';

import { errorApiBackend } from './utils';

export class UserServices {
	axiosInstance = axios.create({
		baseURL: API_PATH_USER,
		headers: { Accept: 'application/json' },
	});

	static validateToken = async (token: string) => {
		try {
			const res = await axios.get<{ token: string }>(API_PATH_USER_VALIDATE_TOKEN, {
				headers: { Accept: 'application/json', Authorization: token },
			});
			return res.data;
		} catch (err) {
			return errorApiBackend(err);
		}
	};

	generateCode = async (email: string) => {
		const data = { email };

		try {
			const res = await this.axiosInstance.post<{ message: string; code: string }>(API_PATH_USER_CODE, data);
			return res.data;
		} catch (err) {
			return errorApiBackend(err);
		}
	};

	login = async (email: string, code: string) => {
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

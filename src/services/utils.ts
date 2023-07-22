import { isAxiosError } from 'axios';
import { IErrorBackendApi } from '../types/backend/error.interface';

export function errorApiBackend(err: unknown) {
	console.log(err);

	if (isAxiosError(err) && err.response?.data) {
		return err.response.data as IErrorBackendApi;
	}

	if (isAxiosError(err) && err.message === 'Network Error') {
		return {
			message: 'Network Error',
			error: 'Error trying to connect to server',
			statusCode: 503,
		} as IErrorBackendApi;
	}

	return {
		message: 'Error desconocido',
		error: 'A ocurrido un error',
		statusCode: 0,
	} as IErrorBackendApi;
}

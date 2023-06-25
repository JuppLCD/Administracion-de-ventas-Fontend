import { isAxiosError } from 'axios';
import { IErrorBackendApi } from '../types/apiBackend.interface';

export function errorApiBackend(err: unknown) {
	console.log(err);

	if (isAxiosError(err)) {
		return err.response?.data as IErrorBackendApi;
	}

	return {
		message: 'Error desconocido',
		error: 'A ocurrido un error al hacer login',
		statusCode: 0,
	} as IErrorBackendApi;
}

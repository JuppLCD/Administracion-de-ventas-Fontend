import { isAxiosError } from 'axios';
import { IErrorBackendApi } from '@/types/backend/error.interface';

export function errorApiBackend(err: unknown) {
	console.log('Ocurrio un error (errorApiBackend) -|- ', err);

	if (isAxiosError(err) && err.response?.data) {
		return new ErrorBackendApi(err.response.data as IErrorBackendApi);
	}

	if (isAxiosError(err) && err.message === 'Network Error') {
		return new ErrorBackendApi({
			message: 'Network Error',
			error: 'Error trying to connect to server',
			statusCode: 503,
		});
	}

	return new ErrorBackendApi({});
}

export class ErrorBackendApi implements IErrorBackendApi {
	message: string;
	error: string;
	statusCode: number;

	constructor({ message, error, statusCode }: Partial<IErrorBackendApi>) {
		this.message = message ?? 'Error desconocido';
		this.error = error ?? 'A ocurrido un error';
		this.statusCode = statusCode ?? 0;
	}
}

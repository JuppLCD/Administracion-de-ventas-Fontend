import { json, redirect } from 'react-router-dom';

import { UserServices } from '../../services/user';

import type { ActionFunctionArgs } from 'react-router-dom';
import type { IErrorBackendApi } from '../../types/apiBackend.interface';

export default async function actionHome({ request }: ActionFunctionArgs) {
	const formData = await request.formData();

	const intent = formData.get('intent');
	formData.delete('intent');

	const data = Object.fromEntries(formData.entries()) as {
		email: string;
		code: string;
	};

	if (intent === 'login') {
		let res = await UserServices.login(data.email, data.code);

		if ((res as IErrorBackendApi).error) {
			res = res as IErrorBackendApi;
			throw json({ message: res.message, error: res.error }, { status: res.statusCode });
		}

		res = res as { message: string; token: string };

		alert(res.message + ' Y el token es ->' + res.token);
		console.log('Login exitoso');

		localStorage.setItem('token', res.token);
		return redirect('/auth');
	}

	if (intent === 'send_code') {
		if (data.email.trim() === '') {
			alert('Falta email');
			return null;
		}
		let res = await UserServices.generateCode(data.email);

		if ((res as IErrorBackendApi).error) {
			res = res as IErrorBackendApi;

			alert('Error');
			console.log(res);
			return null;
		}

		res = res as { message: string; code: string };

		alert(res.message + ' Y el codigo es ->' + res.code);
		console.log('Codigo resivido');
		return null;
	}

	throw json({ message: 'Invalid intent' }, { status: 400 });
}

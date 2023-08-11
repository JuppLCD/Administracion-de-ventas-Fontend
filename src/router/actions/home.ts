import { json } from 'react-router-dom';

import { UserServices } from '@/services/user';

import { ErrorBackendApi } from '@/services/utils';

import type { ActionFunctionArgs } from 'react-router-dom';

export default async function ActionHome({ request }: ActionFunctionArgs) {
	const UserService = new UserServices();
	const formData = await request.formData();

	const intent = formData.get('intent');
	formData.delete('intent');

	const data = Object.fromEntries(formData.entries()) as {
		email: string;
		code: string;
	};

	if (intent === 'login') {
		if (data.email.trim() === '') {
			return json({ email: 'Falta email' });
		}
		if (data.code.trim() === '') {
			return json({ code: 'Falta code' });
		}

		const res = await UserService.login(data.email, data.code);

		if (res instanceof ErrorBackendApi) {
			throw json({ message: res.message, error: res.error }, { status: res.statusCode });
		}

		return json({ token: res.token });
	}

	if (intent === 'send_code') {
		if (data.email.trim() === '') {
			return json({ email: 'Falta email' });
		}
		const res = await UserService.generateCode(data.email);

		if (res instanceof ErrorBackendApi) {
			throw json({ message: res.message, error: res.error }, { status: res.statusCode });
		}

		console.log(res.message + ' -|- El codigo es ->' + res.code);
		return null;
	}

	throw json({ message: 'Invalid intent' }, { status: 400 });
}

import { useState } from 'react';

import { Button, ButtonGroup, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import Layout from '../layout';

import { UserServices } from '../services/user';

import type { FormEvent, ChangeEvent } from 'react';
import type { IErrorBackendApi } from '../types/apiBackend.interface';

import { Link, useNavigate } from 'react-router-dom';

function Home() {
	const [inputs, setInputs] = useState({ email: 'test@test.com', code: 'O68n6TJoYu' });
	const isError = false;
	const errorMessage = 'Error';

	const navigate = useNavigate();

	const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputs((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const res = await UserServices.login(inputs.email, inputs.code);

		if ((res as IErrorBackendApi).error) {
			alert('Error');
			console.log(res);
			return;
		}

		alert(res.message + ' Y el token es ->' + (res as { message: string; token: string }).token);
		console.log('Login exitoso');

		localStorage.setItem('token', (res as { message: string; token: string }).token);
		navigate('/auth', { replace: true });
	};

	const sendCode = async () => {
		if (inputs.email.trim() === '') {
			alert('Falta email');
			return;
		}
		const res = await UserServices.generateCode(inputs.email);

		if ((res as IErrorBackendApi).error) {
			alert('Error');
			console.log(res);
			return;
		}

		alert(res.message + ' Y el codigo es ->' + (res as { message: string; code: string }).code);
		console.log('Codigo resivido');
	};

	return (
		<Layout centerContent>
			<Button as={Link} to='/auth' bg={'green.400'} mb={10}>
				Auth ModeDev
			</Button>
			<form onSubmit={handleSubmit}>
				<FormControl isRequired isInvalid={isError}>
					<FormLabel>Email</FormLabel>
					<Input
						placeholder='Put your email here...'
						required
						type='email'
						name='email'
						value={inputs.email}
						onChange={handleChangeInputs}
					/>
					{isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
				</FormControl>
				<FormControl mt='3' isInvalid={isError}>
					<FormLabel>Code</FormLabel>
					<Input
						placeholder='Put the code we sent you here'
						name='code'
						value={inputs.code}
						onChange={handleChangeInputs}
					/>
					{isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
				</FormControl>

				<ButtonGroup mt={5}>
					<Button type='button' bg='pink.600' onClick={sendCode}>
						Send Code
					</Button>
					<Button type='submit' bg={'yellow.400'}>
						Log In
					</Button>
				</ButtonGroup>
			</form>
		</Layout>
	);
}

export default Home;

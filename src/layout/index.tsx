import { useState } from 'react';
import { Button, ButtonGroup, Container, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

import { UserServices } from '../services/user';

import type { FormEvent, ChangeEvent } from 'react';
import { IErrorBackendApi } from '../types/apiBackend.interface';

function Layout() {
	const [inputs, setInputs] = useState({ email: 'test@test.com', code: '4nYWNXyFt8' });
	const isError = false;
	const errorMessage = 'Error';

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

		alert(res.message + ' Y el codigo es ->' + (res as { message: string; newCode: string }).newCode);
		console.log('Codigo resivido');
	};

	return (
		<>
			<Container maxW='container.lg' centerContent mt={20}>
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
			</Container>
		</>
	);
}

export default Layout;

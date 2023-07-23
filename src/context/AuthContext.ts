import { createContext } from 'react';

interface Auth {
	isAuth: boolean;
	token: string;
	logout: () => void;
}

const AuthContextValueDefoult: Auth = {
	isAuth: false,
	token: '',
	logout: () => {
		//
	},
};

export const AuthContext = createContext<Auth>(AuthContextValueDefoult);
